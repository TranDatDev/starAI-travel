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

class PoliciesDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cancellation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  checkIn?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  checkOut?: string;
}

export class CoordinatesDto {
  @ApiProperty({ enum: ['Point'], default: 'Point' })
  @IsIn(['Point'])
  type: 'Point';

  @ApiProperty({
    example: [106.689, 10.762],
    description: 'Kinh độ, vĩ độ [longitude, latitude]',
  })
  @IsArray()
  @Type(() => Number)
  coordinates: [number, number];
}

export class CreateAccommodationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsNumber()
  minPrice: number;

  @ApiProperty()
  @IsNumber()
  maxPrice: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  communeId?: Types.ObjectId;

  @ApiProperty({ type: CoordinatesDto })
  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  ManagerId?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  maxGuests?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  maxRooms?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  officialRating?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  userRating?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  reviewsCount?: number;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber('VN')
  contactPhone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ type: PoliciesDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => PoliciesDto)
  policies?: PoliciesDto;
}
