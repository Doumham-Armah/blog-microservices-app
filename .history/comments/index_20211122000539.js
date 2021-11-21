const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  // generate random ID for comment
  const commentId = randomBytes(4).toString("hex");
  // extract the content of the comment
  const { content } = req.body;

  //   add comment to comments object
  comments = commentsByPostId[req.params.id] || [];

  // status 201 indicates a resource was created
  // send back the created post
  res.status(201).send(comments[id]);
});

app.listen(4001, () => {
  console.log("Listening on port 4000!");
});
