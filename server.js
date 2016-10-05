//Express
var express 	= require('express');
var app         = express(); 
app.use(express.static(process.cwd() + '/public'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//bodyparser
var bodyParser 			= require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

//I think I need this...
var path            = require('path');

//MethodOverride
var methodOverride  = require('method-override')
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method-Override'));

//controllerjs
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 3003;
app.listen(PORT);

var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelizedburger;

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	return sequelizeConnection.sync({force:true})
})

// only when those tables are made, do we want to run the next set of functions
// .then(function(){
// 	return models.Manager.create(
// 		{

// //Does this take me straight to the home page?
// app.get('/', function (req, res) {
//     app.render('index');
// });

//trying to add a burger
// app.post('/create', function(req,res){
//     connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.burger], function(err, result) {
//       if (err) throw err;
//       res.redirect('/');
//     });
// });


