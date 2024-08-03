import { fetchCoinData } from './liveCoinWatchService';
import CoinData from '../models/coinModel';

const POLL_INTERVAL = 10000; // Poll every 10 seconds

const pollData = async () => {
  const codes = ['BTC', 'ETH', 'LTC', 'SOL', 'MATIC'];
  const now = Date.now();
  const start = now - 1000 * 60 * 5; // 5 minutes ago

  for (const code of codes) {
    const data = await fetchCoinData(code);
    await CoinData.create(data);
  }
};

setInterval(pollData, POLL_INTERVAL);
