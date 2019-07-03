const express = require('express');
const router = express.Router();

const jobRoutes = require('../routes/jobRoutes');

// configure the router middleware
router.use('/jobs', jobRoutes);

module.exports = router;