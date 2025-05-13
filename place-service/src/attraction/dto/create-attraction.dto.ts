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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LocalizedDescriptionDto } from 'src/shared/dto/localizedDescriptionDto';
import { CoordinatesDto } from 'src/shared/dto/coordinatesDto';

export class CreateAttractionDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ type: LocalizedDescriptionDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedDescriptionDto)
  description?: LocalizedDescriptionDto;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  officialRating?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  reviewsTotal?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  reviewsCount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber('VN')
  contactPhone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  openingHours?: string[];

  @ApiProperty()
  @IsString()
  website: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @ApiProperty()
  @IsNumber()
  minPrice: number;

  @ApiProperty()
  @IsNumber()
  maxPrice: number;

  @ApiProperty({ type: CoordinatesDto })
  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @ApiProperty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsString()
  adminId: string;

  @ApiProperty({ type: String })
  @IsString()
  communeId: Types.ObjectId;
}
