import { Parcel } from './parcel.model.js';

// ✅ Book a Parcel (by Customer)
export const createParcel = async (req, res) => {
  try {
    const {
      pickupAddress,
      deliveryAddress,
      parcelSize,
      parcelType,
      paymentType,
      codAmount
    } = req.body;

    if (!pickupAddress || !deliveryAddress || !parcelType || !paymentType) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const newParcel = await Parcel.create({
      customerId: req.user._id,
      pickupAddress,
      deliveryAddress,
      parcelSize,
      parcelType,
      paymentType,
      codAmount: paymentType === 'cod' ? codAmount : 0
    });

    res.status(201).json({ success: true, parcel: newParcel });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ View Own Parcel History
export const getMyParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({ customerId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, parcels });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Track a Parcel (with Geo Location)
export const trackParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);

    // Must match user ID (security check)
    if (!parcel || String(parcel.customerId) !== String(req.user._id)) {
      return res.status(404).json({ message: 'Parcel not found or unauthorized' });
    }

    res.status(200).json({
      success: true,
      coordinates: parcel.coordinates
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
