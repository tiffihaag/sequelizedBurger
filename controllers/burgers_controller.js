var models  = require('../models');
var express = require('express');
var router = express.Router();
// edit burger model to match sequelize
var Burger = require('../models/')["burgers"];

router.get('/burgers', function(req, res) {
	Burger.findAll({
  })
	.then(function(burgers) {
		res.render('burgers/index', {
      	burgers: burgers
    })
  })
});



module.exports = router;







