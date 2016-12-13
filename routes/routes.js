/////////Requiring Dependencies/////////////////
////////////////////////////////////////////////
var cheerio = require("cheerio");
var request = require("request");
var exphbs = require('express-handlebars');
var methodOver = require('method-override');
var mongoose =require('mongoose');

/////////////


module.exports = function(app) {

	var hbs = exphbs.create({
    helpers: {
      dateFormat: require("handlebars-dateformat")
    },
    defaultLayout: "main"
  });

	app.set("views");
	app.engine("handlebars", hbs.engine);
	app.set("view engine", "handlebars");
	app.use(methodOver("_method"));
	 
	
	app.get("/", function(req, res) {
		res.send("Hello World!!!");
}),

}