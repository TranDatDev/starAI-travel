import {
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class AttractionFilterDto {
  @ApiPropertyOptional({ type: String, description: 'Name of the attraction' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ type: String, description: 'Commune ID' })
  @IsOptional()
  @IsString()
  communeId?: string;

  @ApiPropertyOptional({ type: String, description: 'District ID' })
  @IsOptional()
  @IsString()
  districtId?: string;

  @ApiPropertyOptional({ type: String, description: 'Province ID' })
  @IsOptional()
  @IsString()
  provinceId?: string;

  @ApiPropertyOptional({
    enum: [
      'natural',
      'historical',
      'museum',
      'amusement-park',
      'cultural',
      'religious',
      'landscape',
      'shopping',
    ],
    description: 'Category of the attraction',
  })
  @IsOptional()
  @IsEnum([
    'natural',
    'historical',
    'museum',
    'amusement-park',
    'cultural',
    'religious',
    'landscape',
    'shopping',
  ])
  category?: string;

  @ApiPropertyOptional({ type: Number, description: 'Minimum price' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @ApiPropertyOptional({ type: Number, description: 'Maximum price' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxPrice?: number;

  @ApiPropertyOptional({ type: Boolean, description: 'Availability status' })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ type: Boolean, description: 'Featured status' })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiPropertyOptional({
    type: Number,
    description: 'Page number for pagination',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ type: Number, description: 'Limit of items per page' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({ type: String, description: 'Commune slug' })
  @IsOptional()
  @IsString()
  communeSlug?: string;

  @ApiPropertyOptional({ type: String, description: 'District slug' })
  @IsOptional()
  @IsString()
  districtSlug?: string;

  @ApiPropertyOptional({ type: String, description: 'Province slug' })
  @IsOptional()
  @IsString()
  provinceSlug?: string;

  @ApiPropertyOptional({
    enum: [
      'createdAt',
      'name',
      'minPrice',
      'maxPrice',
      'userRating',
      'officialRating',
      'reviewsCount',
      'isFeatured',
    ],
    description: 'Field to sort by',
  })
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

  @ApiPropertyOptional({
    enum: ['asc', 'desc'],
    description: 'Sort order',
  })
  @IsOptional()
  @IsEnum(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';

  @ApiPropertyOptional({ type: String, description: 'Search query' })
  @IsOptional()
  @IsString()
  search?: string;
}
