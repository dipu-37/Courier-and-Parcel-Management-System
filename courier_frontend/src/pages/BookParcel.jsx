import { useState } from "react";
import api from "../services/api";

export default function BookParcel() {
  const [form, setForm] = useState({
    pickupAddress: "",
    deliveryAddress: "",
    parcelType: "document",
    cod: false
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/parcels", form);
      setMessage("Parcel Booked! Tracking ID: " + res.data.parcel._id);
    } catch (err) {
      setMessage("Failed to book parcel.");
      console.log(err)
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Book a Parcel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Pickup Address" className="input" required
          onChange={e => setForm({ ...form, pickupAddress: e.target.value })}
        />
        <input type="text" placeholder="Delivery Address" className="input" required
          onChange={e => setForm({ ...form, deliveryAddress: e.target.value })}
        />
        <select className="input" onChange={e => setForm({ ...form, parcelType: e.target.value })}>
          <option value="document">Document</option>
          <option value="box">Box</option>
          <option value="fragile">Fragile</option>
        </select>
        <label className="flex items-center">
          <input type="checkbox" onChange={e => setForm({ ...form, cod: e.target.checked })} />
          <span className="ml-2">Cash on Delivery (COD)</span>
        </label>
        <button type="submit" className="btn-primary">Book Now</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
