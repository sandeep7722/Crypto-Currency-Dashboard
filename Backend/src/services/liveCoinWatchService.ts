import axios from 'axios';
import dotenv from 'dotenv';
import { CoinData, isCoinData } from '../types/CoinData';




dotenv.config();

const API_URL = "https://api.livecoinwatch.com/coins/single";
const API_KEY = process.env.API_KEY;

export const fetchCoinData = async (code: string): Promise<CoinData> => {
  try {
    const response = await axios.post(API_URL, {
      currency: "USD",
      code: code,
      meta: true,
    }, {
      headers: {
        'content-type': 'application/json',
        'x-api-key': API_KEY as string,
      },
    });

    const data = response.data;

    // if (!isCoinData(data)) {
    //   throw new Error('Invalid data format');
    // }
    console.log("recieve data=",data);
    
    

    return data;
  } catch (error) {
    throw new Error('Error fetching data:'+error);
  }
};
