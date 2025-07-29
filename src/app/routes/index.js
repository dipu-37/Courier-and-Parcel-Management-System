const express = require('express');
const router = express.Router();

const authRoutes = require('../modules/auth/auth.routes');
const parcelRoutes = require('../modules/parcel/parcel.routes');

router.use('/auth', authRoutes);
router.use('/parcel', parcelRoutes);

module.exports = router;
