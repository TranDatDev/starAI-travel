import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RequestPartnerDto {
  @ApiProperty({
    description: 'The name of the organization',
    example: 'TravelAI Inc.',
  })
  @IsNotEmpty()
  @IsString()
  organization: string;

  @ApiProperty({
    description: 'The license number of the organization',
    example: '12345-67890',
  })
  @IsNotEmpty()
  @IsString()
  licenseNumber: string;
}
