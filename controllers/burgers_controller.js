var burgers  = require('../models')["burgers"];
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burgers.findAll()
	.then(function(burgers) {
		res.render('index', {burgers})
    })
});

module.exports = router;







