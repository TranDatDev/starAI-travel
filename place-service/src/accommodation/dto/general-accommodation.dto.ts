import { IsString, IsNumber, Min } from 'class-validator';

export class GeneralAccommodationDto {
  @IsString()
  shortid: string;

  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  minPrice: number;

  @IsNumber()
  @Min(0)
  maxPrice: number;
}
