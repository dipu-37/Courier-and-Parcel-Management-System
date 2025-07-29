import mongoose from 'mongoose';
import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 5000;
let isConnected = false;

async function main() {
  try {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGODB_URL);
      isConnected = true;
      console.log('✅ Database connected');

      app.listen(PORT, () => {
        console.log(`🚀 App listening on http://localhost:${PORT}`);
      });
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
}

main();
