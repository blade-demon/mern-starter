const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	googleId: String,
	githubId: String,
	name: String,
	credits: {
		type: Number,
		default: 0
	}
});

mongoose.model("users", UserSchema);
