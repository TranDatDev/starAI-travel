import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsArray,
  IsEmail,
  IsPhoneNumber,
  ValidateNested,
  IsIn,
} from 'class-validator';
import { Types } from 'mongoose';
import { Type } from 'class-transformer';

export class CoordinatesDto {
  @IsIn(['Point'])
  type: 'Point';

  @IsArray()
  @Type(() => Number)
  coordinates: [number, number];
}

export class CreateRestaurantDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  category: string;

  @IsNumber()
  minPrice: number;

  @IsNumber()
  maxPrice: number;

  @IsOptional()
  communeId?: Types.ObjectId;

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  ManagerId?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsNumber()
  officialRating?: number;

  @IsOptional()
  @IsNumber()
  userRating?: number;

  @IsOptional()
  @IsNumber()
  reviewsCount?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  cuisines?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @IsOptional()
  @IsPhoneNumber('VN')
  contactPhone?: string;

  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
