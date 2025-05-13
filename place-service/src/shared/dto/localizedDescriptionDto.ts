import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class LocalizedDescriptionDto {
  @ApiPropertyOptional()
  @IsString()
  vi: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  en?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ko?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ja?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  zh?: string;
}
