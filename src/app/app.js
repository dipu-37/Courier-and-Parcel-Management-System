import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AuthRoutes } from './modules/auth/auth.routes.js';
import { ParcelRoutes } from './modules/parcels/parcel.router.js';
import { AgentRoutes } from './modules/agent/agent.routes.js';
import { AdminRoutes } from './modules/admin/admin.routes.js';



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

app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/parcels', ParcelRoutes);
app.use('/api/v1/agent', AgentRoutes);
app.use('/api/v1/admin', AdminRoutes);

export default app;
