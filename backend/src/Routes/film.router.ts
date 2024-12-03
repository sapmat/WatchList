import * as express from "express";
import { nextFunc } from "../Middleware/Wrapper/wrapper";
import { filmController } from "../Controllers/film.controller";
import { validateJoi } from "../Middleware/Validator/validator";

export const filmRouter = express.Router();

filmRouter.post("/", validateJoi("film"), nextFunc(filmController.addFilm));
filmRouter.post("/all", nextFunc(filmController.getAllFilms));
filmRouter.patch("/:filmId", nextFunc(filmController.updateFilm));
filmRouter.get("/one/:filmId", nextFunc(filmController.getFilm));
filmRouter.delete("/:filmId", nextFunc(filmController.deleteFilm));
