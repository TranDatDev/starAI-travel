import { ApiProperty } from '@nestjs/swagger';
import { Accommodation } from '../schemas/accommodation.schema';
import { LocationDto } from 'src/location/dto/location.dto';
export class AccommodationDto {
  @ApiProperty()
  shortId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  extendedAddress: string;

  @ApiProperty({ type: () => LocationDto })
  location: LocationDto;

  constructor(partial: Accommodation & { communeId: any }) {
    const commune = partial.communeId;
    const district = commune?.districtId;
    const province = district?.provinceId;

    this.shortId = partial.shortId;
    this.name = partial.name;
    this.address = partial.address;
    this.extendedAddress = [
      partial.address,
      commune?.fullName,
      district?.fullName,
      province?.fullName,
    ]
      .filter(Boolean)
      .join(', ');

    this.location = {
      commune: {
        shortId: commune.shortId,
        fullName: commune.fullName,
        district: {
          shortId: district.shortId,
          fullName: district.fullName,
          province: {
            shortId: province.shortId,
            fullName: province.fullName,
          },
        },
      },
    };
  }
}
