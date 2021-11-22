const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.listen(4005, () => {
  console.log("event bus listening on port 4005!");
});
