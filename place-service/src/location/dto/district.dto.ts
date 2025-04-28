import { ApiProperty } from '@nestjs/swagger';
import { ProvinceDto } from './province.dto';
export class DistrictDto {
  @ApiProperty()
  shortId: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty({ type: () => ProvinceDto })
  province: ProvinceDto;
}
