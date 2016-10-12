var express = require('express');
var router = express.Router();
// edit burger model to match sequelize
var Burger = require('../models/')["Burger"];

// get route, edited to match sequelize
router.get('/burgers', function(req,res) {
    // replace old function with sequelize function
    Burger.findAll()
    // use promise method to pass the burgers...
    .then(function(burger_data){
        console.log(burger_data);
        // into the main index, updating the page
        return res.render('index', {burger_data})
    })
});

module.exports = router;


// router.post('/burgers/create', function (req, res) {
// 	Burger.find


// 	var columnNames = 'burger_name'; 
// 	var objColVals = req.body.newHamburger;
// 	burger.create(columnNames, objColVals, function() {
// 		res.redirect('/burgers');
// 		});  
// 	});

// router.put('/burgers/devoured/:burger_name', function(req, res) {
// 	var condition = "burger_name = '" + req.params.burger_name + "' ";
// 	var objColVals = 'devoured = ' + req.body.devoured;

// 	burger.devoured(objColVals, condition, function() {
// 		res.redirect('/burgers');
// 	});
// });

// router.delete('/burgers/delete/:burger_name', function (req, res) {
// 	var condition = "burger_name = '" + req.params.burger_name + "' ";

// 	burger.delete(condition, function () {
// 		res.redirect('/burgers');
// 	});
// });





