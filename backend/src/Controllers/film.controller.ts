import { Request, Response } from "express";
import { filmService } from "../Services/film.service";
import { Film } from "../Models/Entity/film.model";
import { FilterType } from "../Models/Interfaces/query";

class FilmController {
  async addFilm(req: Request, res: Response) {
    const data: Partial<Film> = req.body;
    const film = await filmService.createFilm(data);
    res.status(201).send(film);
  }

  async updateFilm(req: Request, res: Response) {
    const data: Film = req.body;
    const film = await filmService.updateFilm(data);
    res.status(200).send(film);
  }

  async getFilm(req: Request, res: Response) {
    const { filmId } = req.params;
    const film = await filmService.getFilm(filmId);
    res.status(200).send(film);
  }

  async getAllFilms(req: Request, res: Response) {
    const filter: FilterType = req.body;
    const films = await filmService.getAllFilms(filter);
    res.status(200).send(films);
  }

  async deleteFilm(req: Request, res: Response) {
    const { filmId } = req.params;
    const film = await filmService.deleteFilms(filmId);
    res.status(200).send(film);
  }
}

export const filmController = new FilmController();
