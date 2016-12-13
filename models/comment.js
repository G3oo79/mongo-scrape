//////////Dependencies/////////////////
//////////////////////////////////////
var mongoose = require ("mongoose");
//////////////
var Schema = mongoose.Schema;

//////////////Creating Schema for user//////
////////////////////////////////////////////
var commentSchema = new Schema({

	header: {
		type: String,
	},
	comment: [{
		type: String,
		trim: true
	}],
	date: {
		type: Date,
		default: Date.now
	},
	url: {
		type: String,
		unique: true
	},

});

var comment = mongoose.model("Comment", commentSchema);

module.exports = comment;