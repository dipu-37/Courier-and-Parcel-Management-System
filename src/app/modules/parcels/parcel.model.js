import mongoose from 'mongoose';

const parcelSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assignedAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null // When assigned by admin
  },
  pickupAddress: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  parcelSize: { type: String, enum: ['small', 'medium', 'large'], default: 'medium' },
  parcelType: { type: String, required: true },
  paymentType: { type: String, enum: ['cod', 'prepaid'], required: true },
  codAmount: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['Booked', 'Picked Up', 'In Transit', 'Delivered', 'Failed'],
    default: 'Booked'
  },
  coordinates: {
    lat: { type: Number, default: null },
    lng: { type: Number, default: null }
  }
}, { timestamps: true });

export const Parcel = mongoose.model('Parcel', parcelSchema);
