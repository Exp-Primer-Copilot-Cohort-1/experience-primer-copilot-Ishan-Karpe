// Create a web server

// Import express module
const express = require("express");

// Import path module
const path = require("path");

// Import body-parser module
const bodyParser = require("body-parser");

// Create an express application
const app = express();

// Set the template engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Set the static resources directory
app.use(express.static(path.join(__dirname, "public")));

// Configure body-parser to handle post requests
app.use(bodyParser.urlencoded({ extended: false }));

// Configure body-parser to handle JSON data requests
app.use(bodyParser.json());

// Import the comments module
const comments = require("./comments");

// Import the comments route
const commentsRoute = require("./routes/comments");

// Add the comments route to the application
app.use(commentsRoute);

// Import the index route
const indexRoute = require("./routes/index");

// Add the index route to the application
app.use(indexRoute);

// Start the web server on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
