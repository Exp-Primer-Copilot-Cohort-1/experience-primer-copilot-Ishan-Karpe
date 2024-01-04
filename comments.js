// Create a web server

const express = require("express");
const app = express();
const port = 3000;

// Data
const comments = [
  {
    id: 1,
    name: "John",
    comment: "Hello World",
  },
  {
    id: 2,
    name: "Bob",
    comment: "Hello World",
  },
];

// Middleware
app.use(express.json());

// Create a route
app.get("/", (req, res) => {
    res.send("Hello World");
  });
  
  // Create a route
  app.get("/api/comments", (req, res) => {
    res.send(comments);
  });
  
  // Create a route
  app.get("/api/comments/:id", (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) {
      res.status(404).send("Comment not found");
    } else {
      res.send(comment);
    }
  });
  
  // Create a route
  app.post("/api/comments", (req, res) => {
    const comment = {
      id: comments.length + 1,
      name: req.body.name,
      comment: req.body.comment,
    };
    comments.push(comment);
    res.send(comment);
  });
  
  // Create a route
  app.put("/api/comments/:id", (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) {
      res.status(404).send("Comment not found");
    } else {
      comment.name = req.body.name;
      comment.comment = req.body.comment;
      res.send(comment);
    }
  });
  
  // Create a route
  app.delete("/api/comments/:id", (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) {
      res.status(404).send("Comment not found");
    } else {
      const index = comments.indexOf(comment);
      comments.splice(index, 1);
      res.send(comment);
    }
  });

// Create a server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});