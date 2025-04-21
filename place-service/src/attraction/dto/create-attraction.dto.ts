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

export class CreateAttractionDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsOptional()
  communeId?: Types.ObjectId;

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

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
  @IsPhoneNumber('VN')
  contactPhone?: string;

  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  openingHours?: string[];

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  ManagerId?: string;
}
