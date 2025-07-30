import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // adjust to server URL

export default socket;
