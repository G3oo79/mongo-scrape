//////////Dependencies/////////////////
//////////////////////////////////////
var mongoose = require ("mongoose");
//////////////
var Schema = mongoose.Schema;

//////////////Creating Schema for user//////
////////////////////////////////////////////
var newsSchema = new Schema({

	header: {
		type: String,
	},
	text: {
		type: String,
		trim: true
	},
	image: {
		type: String,
	},
	url: {
		type: String,
		unique: true
	},

});

var news = mongoose.model("News", newsSchema);

module.exports = news;