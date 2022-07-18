const express = require("express");
const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
  postReduxStateUser,
} = require("../controllers/user");

const router = express.Router();

router.get("/users", getUsers);

router.post("/user", addUser);

router.get("/user/:id", getUser);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", updateUser);

router.post("/user/redux_state_user/:id",postReduxStateUser)

module.exports = router;
