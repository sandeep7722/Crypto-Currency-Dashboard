import express from 'express';
import mongoose from 'mongoose';
import dataRoutes from './routes/dataRoutes';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();


const app=express();
app.use(cors());
app.use(express.json());


const URL: string | undefined = process.env.MONGO_URL;

if (!URL) {
  throw new Error('MONGO_URI is not defined');
}

mongoose.connect(URL, {
    retryWrites: true,
    w: 'majority'
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use('/api',dataRoutes);


export default app;