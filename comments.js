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

// Create routes...

// Create a server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});