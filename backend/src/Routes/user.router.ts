import * as express from "express";
import { nextFunc } from "../Middleware/Wrapper/wrapper";
import { userController } from "../Controllers/user.controller";
import { validateJoi } from "../Middleware/Validator/validator";

export const userRouter = express.Router();

userRouter.post("/", validateJoi("user"), nextFunc(userController.addUser));
userRouter.get("/:id", nextFunc(userController.getUser))
userRouter.post("/all", nextFunc(userController.getAllFilms));
userRouter.patch("/:filmId", nextFunc(userController.updateFilm));
userRouter.get("/one/:filmId", nextFunc(userController.getFilm));
userRouter.delete("/:filmId", nextFunc(userController.deleteFilm));
