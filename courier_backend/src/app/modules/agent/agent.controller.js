import { Parcel } from '../parcels/parcel.model.js';

// ✅ Get assigned parcels
export const getAssignedParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({ assignedAgent: req.user._id });
    res.status(200).json({ success: true, parcels });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update parcel status + emit real-time
export const updateParcelStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const parcel = await Parcel.findOne({ _id: req.params.id, assignedAgent: req.user._id });

    if (!parcel) return res.status(404).json({ message: 'Parcel not found or unauthorized' });

    parcel.status = status;
    await parcel.save();

    // Real-time emit (to frontend)
    global.io?.emit('parcelStatusUpdated', {
      parcelId: parcel._id,
      newStatus: status,
    });

    res.status(200).json({ success: true, parcel });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update coordinates (Live Tracking) + emit
export const updateParcelCoordinates = async (req, res) => {
  try {
    const { lat, lng } = req.body;
    const parcel = await Parcel.findOne({ _id: req.params.id, assignedAgent: req.user._id });

    if (!parcel) return res.status(404).json({ message: 'Parcel not found or unauthorized' });

    parcel.coordinates = { lat, lng };
    await parcel.save();

    // Emit real-time location to customer
    global.io?.emit('parcelLocationUpdated', {
      parcelId: parcel._id,
      lat,
      lng
    });

    res.status(200).json({ success: true, parcel });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
