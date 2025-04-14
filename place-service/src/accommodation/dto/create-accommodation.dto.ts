import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { Types } from 'mongoose';

export class CreateAccommodationDto {
  @IsString()
  name: string;

  @IsOptional()
  communeId: Types.ObjectId;

  @IsOptional()
  districtId: Types.ObjectId;

  @IsOptional()
  provinceId: Types.ObjectId;

  @IsString()
  category: string;

  @IsNumber()
  minPrice: number;

  @IsNumber()
  maxPrice: number;

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
  images?: string[];

  @IsOptional()
  ManagerId?: string;
}
