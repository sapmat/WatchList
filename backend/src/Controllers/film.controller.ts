import { Request, Response } from "express";
import { FilmServices } from "../Services/film.service";
import { Film, PartialFilm } from "../Models/Entity/film.model";
import { FilterType } from "../Models/Interfaces/query";

class FilmController {
  async addFilm(req: Request, res: Response) {
    const data: PartialFilm = req.body;
    const film = await FilmServices.createFilm(data);
    res.status(201).send(film);
  }

  async updateFilm(req: Request, res: Response) {
    const data: Film = req.body;
    const film = await FilmServices.updateFilm(data);
    res.status(200).send(film);
  }

  async getFilm(req: Request, res: Response) {
    const { filmId } = req.params;
    const film = await FilmServices.getFilm(filmId);
    res.status(200).send(film);
  }

  async getAllFilms(req: Request, res: Response) {
    const filter: FilterType = req.body;
    const films = await FilmServices.getAllFilms(filter);
    res.status(200).send(films);
  }

  async deleteFilm(req: Request, res: Response) {
    const { filmId } = req.params;
    const film = await FilmServices.deleteFilms(filmId);
    res.status(200).send(film);
  }
}

export const FilmControllers = new FilmController();
