require("dotenv").config()
const http = require("http");

const express = require("express");
const app = express();

const { connectDB } = require("./db/db.connect");
const bodyParser = require("body-parser");

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", routes);
// // database connection
connectDB();

http.createServer(app).listen(process.env.PORT,()=>{
    console.log("server stated", process.env.PORT);
});

