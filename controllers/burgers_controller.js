var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('burgers', function(req, res) {
	models.burgers.findAll({
    include: [ models.burgers ]
  })
	.then(function(burgers) {
		res.render('burgers/index', {
      	burgers: burgers
    })
  })
});

module.exports = router;







