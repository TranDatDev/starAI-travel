import { Controller } from '@nestjs/common';
import { PartnerService } from './partner.service';

@Controller('partner')
export class PartnerPrivateController {
  constructor(private readonly partnerService: PartnerService) {}
}
