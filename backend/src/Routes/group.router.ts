import * as express from "express";
import { nextFunc } from "../Middleware/Wrapper/wrapper";
import { FilmControllers } from "../Controllers/film.controller";
import { validateJoi } from "../Middleware/Validator/validator";

export const groupRouter = express.Router();

groupRouter.post("/", validateJoi("film"), nextFunc(FilmControllers.addFilm));
groupRouter.post("/all", nextFunc(FilmControllers.getAllFilms));
groupRouter.patch("/:filmId", nextFunc(FilmControllers.updateFilm));
groupRouter.get("/one/:filmId", nextFunc(FilmControllers.getFilm));
groupRouter.delete("/:filmId", nextFunc(FilmControllers.deleteFilm));
