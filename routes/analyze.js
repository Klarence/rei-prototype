var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('analyze', { title: 'Plant & Wildlife Guide' });
});

module.exports = router;
