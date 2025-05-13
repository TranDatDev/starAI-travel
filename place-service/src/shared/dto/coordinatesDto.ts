import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class CoordinatesDto {
  @ApiProperty({ enum: ['Point'], default: 'Point' })
  @IsIn(['Point'])
  type: 'Point';

  @ApiProperty({
    example: [106.689, 10.762],
    description: 'Kinh độ, vĩ độ [longitude, latitude]',
  })
  @IsArray()
  @Type(() => Number)
  coordinates: [number, number];
}
