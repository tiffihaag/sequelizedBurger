var burgers  = require('../models')["burgers"];
var models  = require('../models/burgers');
var express = require('express');
var router = express.Router();

router.get('burgers', function(req, res) {
	models.burgers.findAll()
	.then(function(burgers) {
		res.render('index', {
      	burgers: burgers
    })
  })
});

module.exports = router;







