import { Controller, Get } from '@nestjs/common';
import { MarketsService } from './markets.service';

@Controller('markets')
export class MarketsController {
  constructor(private readonly marketService: MarketsService) {}

  @Get('ticker24h')
  getTicker24h() {
    const data = this.marketService.getMarkets();
    return data;
  }
}
