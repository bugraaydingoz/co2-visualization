var express = require('express');
var router = express.Router();

router.get('/random_co2', function (req, res, next) {
  let co2_val = Math.floor(Math.random() * 4650) + 350; // get random value 350 - 5000
  let co2_per = (co2_val - 350) / (5000 - 350) * (100 - 0) + 0 // map co2 value to percentage
  co2_per = Math.floor(co2_per)

  res.json({
    co2_value: co2_val,
    co2_percentage: co2_per
  })
});

module.exports = router;