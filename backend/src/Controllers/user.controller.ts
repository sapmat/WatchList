import { Request, Response } from "express";
import { userService } from "../Services/user.service";
import { FilterType } from "../Models/Interfaces/query";
import { PartialUser, User } from "../Models/Entity/user.model";

class UserController {
  async addUser(req: Request, res: Response) {
    const data: PartialUser = req.body;
    const user = await userService.createUser(data);
    res.status(201).send(user);
  }

  async updateAccountDetails(req: Request, res: Response) {
    const data: PartialUser = req.body;
    const user = await userService.updateUser(data);
    res.status(200).send(user);
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

export const userController = new UserController();
