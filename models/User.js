const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
	githubId: String,
	name: String,
	credits: Number
});

mongoose.model("users", UserSchema);
