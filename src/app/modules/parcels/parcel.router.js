import express from 'express';
import { createParcel, getMyParcels, trackParcel } from './parcel.controller.js';
import { protect, authorizeRoles } from '../../middlewares/authMiddleware.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

// Book a parcel
router.post('/', authorizeRoles('admin','customer'), createParcel);

// View booking history
router.get('/mine', authorizeRoles('customer','admin'), getMyParcels);

// Track parcel (map location)
router.get('/:id/track', authorizeRoles('customer','admin'), trackParcel);

export const ParcelRoutes = router;
