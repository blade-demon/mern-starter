const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
const { PORT } = require("../index");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("access token", accessToken);
			console.log("refresh token", refreshToken);
			console.log("profile", profile);
		}
	)
);
passport.use(
	new GithubStrategy(
		{
			clientID: keys.githubClientID,
			clientSecret: keys.githubClientSecret,
			callbackURL: "/auth/github/callback",
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ githubId: profile.id }).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({ githubId: profile.id, name: profile.username })
						.save()
						.then(user => done(null, user.id));
				}
			});
		}
	)
);
