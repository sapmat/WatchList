import { User, PartialUser } from "../Models/Entity/user.model";
import { WatchStatus } from "../Models/Enums/enum";
import { FilterType } from "../Models/Interfaces/query";
import { filmRepository } from "../Repositories/film.repositories";

export class UserService {
  async createUser(data: PartialUser): Promise<User> {
    const film: Partial<User> = {
      status: WatchStatus.TO_WATCH,
      matenRating: 0,
      delaRating: 0,
      ...data,
    } as Partial<User>;

    return filmRepository.createFilm(film);
  }

  async updateFilm(data: User): Promise<User> {
    return filmRepository.updateFilm(data);
  }

  async getFilm(_id: string): Promise<User> {
    return filmRepository.getFilm(_id);
  }

  async getAllFilms(filter: FilterType): Promise<User[]> {
    return filmRepository.getFilms(filter);
  }

  async deleteFilms(_id: string): Promise<User> {
    return filmRepository.deleteFilm(_id);
  }
}

export const userService = new UserService();
