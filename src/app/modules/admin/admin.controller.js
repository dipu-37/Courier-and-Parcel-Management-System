import { Parcel } from '../parcels/parcel.model.js';
import { User } from '../../models/User/User.model.js';
import mongoose from 'mongoose';
import { Parser } from 'json2csv';
import fs from 'fs';

// Assign agent to a parcel
export const assignAgent = async (req, res) => {
  const { agentId } = req.body;
  const { id } = req.params;

  try {
    const parcel = await Parcel.findById(id);
    if (!parcel) return res.status(404).json({ message: 'Parcel not found' });

    parcel.assignedAgent = agentId;
    await parcel.save();

    res.status(200).json({ success: true, parcel });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// View dashboard stats
export const getDashboardMetrics = async (req, res) => {
  try {
    const totalParcels = await Parcel.countDocuments();
    const failedDeliveries = await Parcel.countDocuments({ status: 'Failed' });
    const codTotal = await Parcel.aggregate([
      { $match: { paymentType: 'cod' } },
      { $group: { _id: null, total: { $sum: "$codAmount" } } }
    ]);

    res.status(200).json({
      totalParcels,
      failedDeliveries,
      codAmount: codTotal[0]?.total || 0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// View all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// View all bookings
export const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find().populate('customerId', 'name email');
    res.status(200).json({ success: true, parcels });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Export CSV report
export const exportCSV = async (req, res) => {
  try {
    const parcels = await Parcel.find().lean();
    const fields = ['_id', 'pickupAddress', 'deliveryAddress', 'status', 'paymentType', 'codAmount'];
    const parser = new Parser({ fields });
    const csv = parser.parse(parcels);

    res.header('Content-Type', 'text/csv');
    res.attachment('parcels.csv');
    return res.send(csv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
