const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    bye: "buddy"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (!err) {
    console.log(`Server is running on port: ${PORT}.`);
  } else {
    console.log(`Failed to start the server: ${JSON.stringify(err)}`);
  }
});
