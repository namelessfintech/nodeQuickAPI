const express = require('express');
const router = express.Router();


const jobController = require('../controllers/jobsController')


router.get('/', jobController.findAll);

router.post('/', jobController.create);

router.get('/:id', jobController.find);

module.exports = router;

