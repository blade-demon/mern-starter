const passport = require("passport");

module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", { scope: ["profile"] })
	);

	app.get("/auth/google/callback", passport.authenticate("google"));

	app.get(
		"/auth/github",
		passport.authenticate("github", { scope: ["profile"] })
	);

	app.get("/auth/github/callback", passport.authenticate("github"));

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.send(req.user);
		process.exit(0);
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
