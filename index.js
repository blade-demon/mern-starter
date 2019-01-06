const express = require("express");
require("./services/passport");
const app = express();
require("./routes/authRoutes")(app);

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
