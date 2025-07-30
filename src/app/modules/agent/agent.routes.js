import express from 'express';
import {
  getAssignedParcels,
  updateParcelStatus,
  updateParcelCoordinates
} from './agent.controller.js';
import { protect, authorizeRoles } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorizeRoles('agent'));

// GET all assigned parcels
router.get('/parcels', getAssignedParcels);

// PATCH status update
router.patch('/parcels/:id/status', updateParcelStatus);

// PATCH location update
router.patch('/parcels/:id/coordinates', updateParcelCoordinates);

export const AgentRoutes = router;
