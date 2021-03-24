const mongoose = require("mongoose");
const valid = require("validator");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
	heading: {
		type: String,
		trim: true,
		required: true,
		maxLength: 70
	},
    short_description: {
		type: String,
		trim: true,
		required: true,
        maxLength: 150
	},
	description: {
		type: String,
		trim: true,
		required: true,
	},
    created_at: {
        type: Date
    }
});

module.exports = News = mongoose.model("News", newsSchema);
