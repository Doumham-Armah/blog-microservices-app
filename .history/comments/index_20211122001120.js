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

  //   get array of comments(objects) for the desired post
  comments = commentsByPostId[req.params.id] || [];

  //   push new comment(object) into the array
  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  // status 201 indicates a resource was created
  // send back the created comment for the post
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("Listening on port 4000!");
});
