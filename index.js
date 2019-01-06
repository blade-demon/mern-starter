const express = require("express");
const HttpsProxyAgent = require("https-proxy-agent");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");
const app = express();

if (process.env["https_proxy"]) {
  options.agent = new HttpsProxyAgent(process.env["https_proxy"]);
}

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
    }
  )
);

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }, function(req, res) {
    // Successful authentication, redirect home.
    console.log(res);
    res.send("ok");
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (!err) {
    /* eslint no-console: 0*/
    console.log(`Server is running on port: ${PORT}.`);
  } else {
    /* eslint no-console: 0*/
    console.log(`Failed to start the server: ${JSON.stringify(err)}`);
  }
});
