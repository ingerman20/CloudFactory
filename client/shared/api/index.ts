import axios from 'axios';
import { Ticker24hData } from '../../entities/types';
const baseUrl = 'http://localhost:3000';

export const getTicker24h = async (): Promise<Ticker24hData[]> => {
  const response = await axios.get(`${baseUrl}/markets/ticker24h`);
  return response.data;
};
