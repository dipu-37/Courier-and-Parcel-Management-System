// import mongoose from 'mongoose';
// import 'dotenv/config';
// import app from './app.js';

// const PORT = process.env.PORT || 5000;
// let isConnected = false;

// async function main() {
//   try {
//     if (!isConnected) {
//       await mongoose.connect(process.env.MONGODB_URL);
//       isConnected = true;
//       console.log('✅ Database connected');

//       app.listen(PORT, () => {
//         console.log(`🚀 App listening on http://localhost:${PORT}`);
//       });
//     }
//   } catch (error) {
//     console.error('❌ MongoDB connection error:', error.message);
//   }
// }

// main();

import mongoose from 'mongoose';
import 'dotenv/config';
import app from './app.js';
import { Server } from 'socket.io';
import http from 'http';

const PORT = process.env.PORT || 5000;
let isConnected = false;

const server = http.createServer(app); // Socket.IO requires HTTP server
export const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'https://your-client.vercel.app'], // Update as needed
    credentials: true
  }
});

// Handle real-time connections
io.on('connection', (socket) => {
  console.log('🟢 New client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('🔴 Client disconnected:', socket.id);
  });
});

async function main() {
  try {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGODB_URL);
      isConnected = true;
      console.log('✅ Database connected');

      server.listen(PORT, () => {
        console.log(`🚀 App with Socket.IO listening on http://localhost:${PORT}`);
      });
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
}

main();
