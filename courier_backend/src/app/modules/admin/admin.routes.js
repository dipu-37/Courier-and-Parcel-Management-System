import express from 'express';
import {
  assignAgent,
  getDashboardMetrics,
  getAllUsers,
  getAllParcels,
  exportCSV
} from './admin.controller.js';

import { protect, authorizeRoles } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect, authorizeRoles('admin'));

router.get('/dashboard', getDashboardMetrics);
router.get('/users', getAllUsers);
router.get('/parcels', getAllParcels);
router.patch('/parcels/:id/assign', assignAgent);
router.get('/parcels/export/csv', exportCSV);

export const AdminRoutes = router;
