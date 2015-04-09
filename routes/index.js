var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/blinkr', function(req, res, next) {
  res.render('blinkr');
});

router.get('/slices', function(req, res, next) {
  res.render('slices');
});

router.get('/spiral', function(req, res, next) {
  res.render('spiral');
});



module.exports = router;
