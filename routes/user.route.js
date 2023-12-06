const express = require("express");
const { userController } = require("../controller");
const routes = express.Router();


routes.get("/get", userController.getUser);
routes.post("/add", userController.createUser);

module.exports = routes;
