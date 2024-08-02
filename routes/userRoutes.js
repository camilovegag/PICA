import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
