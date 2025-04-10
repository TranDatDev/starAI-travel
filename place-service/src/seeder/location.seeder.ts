import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Model } from 'mongoose';
import { Province } from '../location/schemas/province.schema';
import { District } from '../location/schemas/district.schema';
import { Commune } from '../location/schemas/commune.schema';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

const rawData = require('../resources/location.json');

function generateSlug(name: string, code: string): string {
  return `${slugify(name, { lower: true, strict: true, locale: 'vi' })}-${code}`;
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const provinceModel = app.get<Model<Province>>('ProvinceModel');
  const districtModel = app.get<Model<District>>('DistrictModel');
  const communeModel = app.get<Model<Commune>>('CommuneModel');

  await provinceModel.deleteMany();
  await districtModel.deleteMany();
  await communeModel.deleteMany();

  for (const province of rawData) {
    const provinceSlug = generateSlug(province.FullName, province.Code);
    console.log(`Seeding Province: ${province.FullName} → ${provinceSlug}`);

    const provinceDoc = await provinceModel.create({
      _id: uuidv4(),
      code: province.Code,
      name: province.Name,
      nameEn: province.NameEn,
      fullName: province.FullName,
      fullNameEn: province.FullNameEn,
      slug: provinceSlug,
      shortId: nanoid(8),
    });

    for (const district of province.District) {
      const districtSlug = generateSlug(district.FullName, district.Code);
      console.log(`Seeding District: ${district.FullName} → ${districtSlug}`);

      const districtDoc = await districtModel.create({
        _id: uuidv4(),
        code: district.Code,
        name: district.Name,
        nameEn: district.NameEn,
        fullName: district.FullName,
        fullNameEn: district.FullNameEn,
        slug: districtSlug,
        shortId: nanoid(8),
        provinceCode: province.Code,
        provinceSlug,
        provinceId: provinceDoc._id,
      });

      if (Array.isArray(district.Ward)) {
        for (const commune of district.Ward) {
          const communeSlug = generateSlug(commune.FullName, commune.Code);
          console.log(`Seeding Commune: ${commune.FullName} → ${communeSlug}`);

          await communeModel.create({
            _id: uuidv4(),
            code: commune.Code,
            name: commune.Name,
            nameEn: commune.NameEn,
            fullName: commune.FullName,
            fullNameEn: commune.FullNameEn,
            slug: communeSlug,
            shortId: nanoid(8),
            districtCode: district.Code,
            districtSlug,
            provinceSlug,
            districtId: districtDoc._id,
          });
        }
      } else {
        console.warn(
          `⚠️ District ${district.FullName} (${district.Code}) has no wards`,
        );
      }
    }
  }

  console.log('Seeded location data');
  await app.close();
}

bootstrap();
