const express = require('express');
const router = express.Router();

const weather = require('../controller/weather');

router.get('/weather/:city', weather.weather);
router.post('/weather/', weather.weatherAll);

module.exports = router;