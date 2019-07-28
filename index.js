const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");
const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 24 * 3600 * 1000 * 30,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
	if (!err) {
		/* eslint no-console: 0*/
		console.log(`Server is running on port: ${PORT}.`);
	} else {
		/* eslint no-console: 0*/
		console.log(`Failed to start the server: ${JSON.stringify(err)}`);
	}
});
