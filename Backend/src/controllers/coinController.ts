import { Request, Response } from 'express';
import { fetchCoinData } from '../services/liveCoinWatchService';

export const getCoinData = async (req: Request, res: Response) => {
  try {
    const { code } = req.query;

    if (!code || typeof code !== 'string') {
      return res.status(400).json({ message: "Invalid or missing 'code' query parameter." });
    }

    const data = await fetchCoinData(code);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
