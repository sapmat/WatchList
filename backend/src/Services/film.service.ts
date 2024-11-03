import { Film, PartialFilm } from "../Models/Entity/film.model";
import { WatchStatus } from "../Models/Enums/enum";
import { FilmRepositories } from "../Repositories/film.repositories";

export class FilmService {
  async createFilm(data: PartialFilm): Promise<Film> {
    const film: Partial<Film> = {
      status: WatchStatus.TO_WATCH,
      matenRating: 0,
      delaRating: 0,
      ...data,
    } as Partial<Film>;

    return FilmRepositories.createFilm(film);
  }

  async updateFilm(data: Film): Promise<Film> {
    return FilmRepositories.updateFilm(data);
  }

  async getFilm(_id: string): Promise<Film> {
    return FilmRepositories.getFilm(_id);
  }

  async getAllFilms(): Promise<Film[]> {
    return FilmRepositories.getFilms();
  }

  async deleteFilms(_id: string): Promise<Film> {
    return FilmRepositories.deleteFilm(_id);
  }
}

export const FilmServices = new FilmService();
