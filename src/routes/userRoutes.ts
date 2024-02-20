import express from "express";
// import { Container } from "typedi";
// import "../container";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";
import db from "../database";
// import { UserRepositoryToken, UserServiceToken } from "../tokens/tokens";

const router = express.Router();
// const userController = Container.get(UserController);
// const userService = Container.get(UserServiceToken);
// const userRepository = Container.get(UserRepositoryToken);
const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get("/", (req, res) => userController.getAllUsers(req, res));
router.get("/:id", (req, res) => userController.getUserById(req, res));
router.post("/", (req, res) => userController.createUser(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res));
router.put("/:id", (req, res) => userController.updateUser(req, res));

export default router;
