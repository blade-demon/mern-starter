const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const SurveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	dataSent: Date,
	lastResponded: Date
});

mongoose.model("survey", SurveySchema);
