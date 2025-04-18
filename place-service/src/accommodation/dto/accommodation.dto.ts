import { Accommodation } from '../schemas/accommodation.schema';

export class AccommodationDto {
  shortId: string;
  name: string;
  address: string;
  extendedAddress: string;
  location: {
    commune: {
      shortId: string;
      fullName: string;
      district: {
        shortId: string;
        fullName: string;
        province: {
          shortId: string;
          fullName: string;
        };
      };
    };
  };

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
