import { ApiProperty } from '@nestjs/swagger';
import { CommuneDto } from './commune.dto';
export class LocationDto {
  @ApiProperty({ type: () => CommuneDto })
  commune: CommuneDto;
}
