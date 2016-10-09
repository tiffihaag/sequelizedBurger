//Express
//----------------------------------------------------
var express 	= require('express');
var app         = express(); 
app.use(express.static(process.cwd() + '/public'));

//Handlebars
//----------------------------------------------------
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Bodyparser
//----------------------------------------------------
var bodyParser 			= require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

//Path
//----------------------------------------------------
var path            = require('path');

//MethodOverride
//----------------------------------------------------
var methodOverride  = require('method-override')
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method-Override'));

//Controllerjs
//----------------------------------------------------
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 3003;
app.listen(PORT);

//Sequelize model object
//----------------------------------------------------
var models  = require('./models');

// Extract our sequelize connection from the models object
//----------------------------------------------------
var sequelizeConnection = models.sequelize;

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	return sequelizeConnection.sync({force:true})
})

// Create our burger in a .then callback
//----------------------------------------------------
.then(function(){
	return models.index.create(
		{
			// Burger the user entered
			burger_name: [req.body.burger], 
			})
		});