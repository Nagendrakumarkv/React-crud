import express from "express";

import { getUsers, addUser, getUser, deleteUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/user", addUser);

router.get('/user/:id',getUser)

router.delete('/user/:id',deleteUser)

router.put('/user/:id',updateUser)

export default router;
