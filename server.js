/////////Dependencies//////////////
//////////////////////////////////
var path = require("path");
var express = require("express");
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var Promise = require("bluebird");


mongoose.Promise = Promise;




////////////Import Models///////////////
///////////////////////////////////////
var news = require("./models/news.js");
var comments = require("./models/comment.js");


////////////Initialize express/////////////
var app = express();

////////////Set port////////////////////
/*app.set("port", process.env.PORT || 4040);*/

//////Configure app with morgan and body parser/////////////
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Static file support with public folder
app.use("/public", express.static("public"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

 
app.get('/', function (req, res) {
    res.render('home');
});


/////////here is where we connect the database/////////
mongoose.connect("mongodb://localhost/scrapedData");
var db = mongoose.connection;

/////////Show any mongoose errors///////////
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

////////Once logged in to the db through mongoose, log a success message/////////
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

///////////////////Get Routes files in here/////////////////
require("./routes/routes.js");

/////////////setting the listener and console logging a string to verify connection///////////////
app.listen(4040, function(){
	console.log("Listening to port 4040");
})
