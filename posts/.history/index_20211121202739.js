const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json);

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  // generate random ID
  const id = randomBytes(4).toString("hex");
  //   extract the title of the post
  const { title } = req.body;

  //   add post to posts object
  posts[id] = {
    id,
    title,
  };

  //   status 201 indicates a resource was created
  // send back the created post
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000!");
});
