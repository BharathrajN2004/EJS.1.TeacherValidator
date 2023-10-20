const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Create an Express app
const app = express();

app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/staffValidator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

// check for connection
connection.on('error', () => {
  console.log("Connection error occurred");
})
connection.once('open', () => {
  console.log('Connected to mongodb');
  // Start the server
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
})


// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Parse JSON and URL-encoded query parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes
const homeRoute = require("./routes/home");
const showAllRoute = require("./routes/show");
const queryRoute = require("./routes/query");
const downloadRoute = require("./routes/download");
const addRoute = require("./routes/add");
const loginRoute = require("./routes/login");

// using the routes
app.use(homeRoute, showAllRoute, queryRoute, downloadRoute, addRoute, loginRoute);





