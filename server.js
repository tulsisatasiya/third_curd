// .env file
require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();

// Connect to the database
const { connectDB } = require("./db/db.connect");
const bodyParser = require("body-parser");

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// starting with "/v1"
app.use("/v1", routes);

// Establish a connection to the database
connectDB();

// Create an HTTP server and listen on the specified port
http.createServer(app).listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT);
});
