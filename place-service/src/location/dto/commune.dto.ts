import { ApiProperty } from '@nestjs/swagger';
import { DistrictDto } from './district.dto';
export class CommuneDto {
  @ApiProperty()
  shortId: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty({ type: () => DistrictDto })
  district: DistrictDto;
}
