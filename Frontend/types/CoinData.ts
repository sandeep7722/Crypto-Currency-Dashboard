export interface CoinData {
    name: string;
    symbol: string;
    rank: number;
    age: number;
    color: string;
    png32: string;
    png64: string;
    webp32: string;
    webp64: string;
    exchanges: number;
    markets: number;
    pairs: number;
    allTimeHighUSD: number;
    circulatingSupply: number;
    totalSupply: number | null;
    maxSupply: number | null;
    categories: string[];
    rate: number;
    volume: number;
    cap: number;
    delta: {
      hour: number;
      day: number;
      week: number;
      month: number;
      quarter: number;
      year: number;
    };
  }
  
  export const isCoinData = (data: any): data is CoinData => {
    return (
      typeof data.name === 'string' &&
      typeof data.symbol === 'string' &&
      typeof data.rank === 'number' &&
      typeof data.age === 'number' &&
      typeof data.color === 'string' &&
      typeof data.png32 === 'string' &&
      typeof data.png64 === 'string' &&
      typeof data.webp32 === 'string' &&
      typeof data.webp64 === 'string' &&
      typeof data.exchanges === 'number' &&
      typeof data.markets === 'number' &&
      typeof data.pairs === 'number' &&
      typeof data.allTimeHighUSD === 'number' &&
      typeof data.circulatingSupply === 'number' &&
      (typeof data.totalSupply === 'number' || data.totalSupply === null) &&
      (typeof data.maxSupply === 'number' || data.maxSupply === null) &&
      Array.isArray(data.categories) &&
      typeof data.rate === 'number' &&
      typeof data.volume === 'number' &&
      typeof data.cap === 'number' &&
      typeof data.delta === 'object' &&
      typeof data.delta.hour === 'number' &&
      typeof data.delta.day === 'number' &&
      typeof data.delta.week === 'number' &&
      typeof data.delta.month === 'number' &&
      typeof data.delta.quarter === 'number' &&
      typeof data.delta.year === 'number'
    );
  };
  