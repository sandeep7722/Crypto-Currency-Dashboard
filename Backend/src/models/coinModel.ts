import { Schema, model } from 'mongoose';

const DeltaSchema = new Schema({
  hour: { type: Number, required: true },
  day: { type: Number, required: true },
  week: { type: Number, required: true },
  month: { type: Number, required: true },
  quarter: { type: Number, required: true },
  year: { type: Number, required: true },
}, { _id: false });

const CoinDataSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String},
  rank: { type: Number},
  age: { type: Number},
  color: { type: String},
  png32: { type: String },
  png64: { type: String },
  webp32: { type: String},
  webp64: { type: String },
  exchanges: { type: Number },
  markets: { type: Number },
  pairs: { type: Number },
  allTimeHighUSD: { type: Number },
  circulatingSupply: { type: Number },
  totalSupply: { type: Number },
  maxSupply: { type: Number },
  categories: { type: [String] },
  rate: { type: Number, required: true },
  volume: { type: Number},
  cap: { type: Number },
  delta: { type: DeltaSchema },
}, {
  timestamps: true, // Add timestamps for createdAt and updatedAt
});

const CoinData = model('CoinData', CoinDataSchema);

export default CoinData;
