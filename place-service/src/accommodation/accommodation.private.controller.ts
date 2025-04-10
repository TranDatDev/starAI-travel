import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';

@Controller({ path: '/private/accommodation', version: '1' })
export class AccommodationPrivateController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @Post()
  async create(@Body() data: Partial<Accommodation>): Promise<Accommodation> {
    return this.accommodationService.create(data);
  }

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '5',
  ) {
    return this.accommodationService.findAll(Number(page), Number(limit));
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Accommodation> {
    const accommodation = await this.accommodationService.findOne(id);
    if (!accommodation) {
      throw new NotFoundException(`Accommodation with ID ${id} not found`);
    }
    return accommodation;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Accommodation>,
  ): Promise<Accommodation> {
    return this.accommodationService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.accommodationService.remove(id);
    return { message: `Accommodation with ID ${id} has been deleted` };
  }
}
