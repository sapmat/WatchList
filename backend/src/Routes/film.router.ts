import * as express from "express";
import { nextFunc } from "../Middleware/Wrapper/wrapper";
import { FilmControllers } from "../Controllers/film.controller";
import { validateJoi } from "../Middleware/Validator/validator";

export const filmRouter = express.Router();

filmRouter.post(
  "/",
  validateJoi("film"),
  nextFunc(FilmControllers.addFilm)
);
filmRouter.patch("/:filmId", nextFunc(FilmControllers.updateFilm));
filmRouter.get("/all", nextFunc(FilmControllers.getAllFilms));
filmRouter.get("/one/:filmId", nextFunc(FilmControllers.getFilm));
filmRouter.delete("/:filmId", nextFunc(FilmControllers.deleteFilm));