// Load environment variables from a .env file
require("dotenv").config();

// Import required modules
const http = require("http");
const express = require("express");
const app = express();

// Connect to the database
const { connectDB } = require("./db/db.connect");
const bodyParser = require("body-parser");

// Import routes
const routes = require("./routes");

// Parse incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the defined routes for requests starting with "/v1"
app.use("/v1", routes);

// Establish a connection to the database
connectDB();

// Create an HTTP server and listen on the specified port
http.createServer(app).listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT);
});
