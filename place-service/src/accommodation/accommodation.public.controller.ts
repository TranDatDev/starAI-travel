import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';

@Controller({ path: '/public/accommodation', version: '1' })
export class AccommodationPublicController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '5',
  ) {
    return this.accommodationService.findAll(Number(page), Number(limit));
  }
  @Get(':shortId')
  async findOne(@Param('shortId') shortId: string): Promise<Accommodation> {
    const accommodation =
      await this.accommodationService.findByShortId(shortId);
    if (!accommodation) {
      throw new NotFoundException(`Accommodation with ID ${shortId} not found`);
    }
    return accommodation;
  }
}
