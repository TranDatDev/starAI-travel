import { ApiProperty } from '@nestjs/swagger';
export class GetDistrictDto {
  @ApiProperty()
  shortId: string;

  @ApiProperty()
  fullName: string;
}
