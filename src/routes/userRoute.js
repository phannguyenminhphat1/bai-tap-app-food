const express = require("express");
const {
  getUser,
  createUser,
  getUserID,
  updateUser,
} = require("../controllers/userController");
const userRoute = express.Router();

userRoute.get("/getUser", getUser);
userRoute.get("/getUserId/:id", getUserID);

userRoute.post("/createUser", createUser);
userRoute.put("/updateUser/:id", updateUser);

module.exports = userRoute;
