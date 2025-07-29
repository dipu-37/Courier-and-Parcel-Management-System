import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: ['https://ecommerce-dipu-client-1.onrender.com', 'http://localhost:5173'],
  credentials: true
}));

// Simple Test Route
app.get('/', (req, res) => {
  res.send('✅ Server is running successfully!');
});

export default app;
