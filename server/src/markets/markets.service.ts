import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class MarketsService {
  constructor(private readonly httpService: HttpService) {}

  async getMarkets() {
    const data = await this.httpService
      .get('https://api.poloniex.com/markets/ticker24h')
      .pipe(map((resp) => resp.data));
    return data;
  }
}
