
import { Request, Response } from 'express';
import CoinData from '../models/coinModel';

export const getData = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: "Invalid or missing 'code' query parameter." });
    }

    // Fetching data where 'symbol' matches the 'code' query parameter
    const data = await CoinData.find({ name }).sort({ timestamp: -1 }).limit(20);

    if (data.length === 0) {
      return res.status(404).json({ message: 'No data found for the given symbol.' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
