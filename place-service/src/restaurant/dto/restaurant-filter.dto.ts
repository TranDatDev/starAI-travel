import {
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

export class RestaurantFilterDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  communeId?: string;

  @IsOptional()
  @IsString()
  districtId?: string;

  @IsOptional()
  @IsString()
  provinceId?: string;

  @IsOptional()
  @IsEnum([
    'buffet',
    'casual',
    'fine-dining',
    'cafe',
    'street-food',
    'fast-food',
  ])
  category?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxPrice?: number;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsString()
  communeSlug?: string;

  @IsOptional()
  @IsString()
  districtSlug?: string;

  @IsOptional()
  @IsString()
  provinceSlug?: string;

  @IsOptional()
  @IsEnum([
    'createdAt',
    'name',
    'minPrice',
    'maxPrice',
    'userRating',
    'officialRating',
    'reviewsCount',
    'isFeatured',
  ])
  sortBy?:
    | 'createdAt'
    | 'name'
    | 'minPrice'
    | 'maxPrice'
    | 'userRating'
    | 'officialRating'
    | 'reviewsCount'
    | 'isFeatured';

  @IsOptional()
  @IsEnum(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';

  @IsOptional()
  @IsString()
  search?: string;
}
