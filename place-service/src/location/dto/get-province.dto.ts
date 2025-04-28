import { ApiProperty } from '@nestjs/swagger';
export class GetProvinceDto {
  @ApiProperty()
  shortId: string;

  @ApiProperty()
  fullName: string;
}
