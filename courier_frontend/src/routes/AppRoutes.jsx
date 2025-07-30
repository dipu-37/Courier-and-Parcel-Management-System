import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
// import BookParcel from "../pages/BookParcel";
// import ParcelTrack from "../pages/ParcelTrack";
// import AdminDashboard from "../pages/AdminDashboard";
// import AgentDashboard from "../pages/AgentDashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/book" element={<BookParcel />} />
        <Route path="/track" element={<ParcelTrack />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
