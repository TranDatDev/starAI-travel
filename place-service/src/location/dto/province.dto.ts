import { ApiProperty } from '@nestjs/swagger';
export class ProvinceDto {
  @ApiProperty()
  shortId: string;

  @ApiProperty()
  fullName: string;
}
