import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CoinData } from '../types/CoinData';
// Access environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCoinData = createAsyncThunk(
  'data/fetchCoinData',
  async (code: string) => {
    const response = await axios.get(`${API_URL}/coin-data?name=${code}`);
    
    return response.data as CoinData[];
  }
);

interface DataState {
  coinData: CoinData[];
  selectedCoin: string;
  loading: boolean;
}

const initialState: DataState = {
  coinData: [],
  selectedCoin: 'Bitcoin',
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSelectedCoin(state, action: PayloadAction<string>) {
      state.selectedCoin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCoinData.fulfilled, (state, action: PayloadAction<CoinData[]>) => {
      state.coinData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCoinData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setSelectedCoin } = dataSlice.actions;
export default dataSlice.reducer;
