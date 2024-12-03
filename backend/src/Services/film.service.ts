import filmModel, { Film } from "../Models/Entity/film.model";
import { FilmStyle, FilmType, WatchStatus } from "../Models/Enums/enum";
import { FilterType } from "../Models/Interfaces/query";
import { filmRepository } from "../Repositories/film.repositories";

const generateId = async (style: FilmStyle, type: FilmType) => {
  const count: number = await filmModel.countDocuments();
  const st: string =
    style === FilmStyle.ANIME
      ? "am"
      : style === FilmStyle.CARTOON
      ? "cr"
      : "la";
  const tp: string = type === FilmType.MOVIE ? "mv" : "sr";

  return `${st}${tp}${count.toString().padStart(7, "0")}`;
};

  style: FilmStyle;
  type: FilmType;
  name: string;
  totalRating: number;
  totalRaters: number;
  image: Buffer;

export class FilmService {
  async createFilm(data: Partial<Film>): Promise<Film> {
    const film: Partial<Film> = {
      filmId: generateId(data.style!, data.type!),
      status: WatchStatus.TO_WATCH,
      averageRating: 0,
      ...data,
    } as Partial<Film>;

    return filmRepository.createFilm(film);
  }

  async updateFilm(data: Film): Promise<Film> {
    return filmRepository.updateFilm(data);
  }

  async getFilm(_id: string): Promise<Film> {
    return filmRepository.getFilm(_id);
  }

  async getAllFilms(filter: FilterType): Promise<Film[]> {
    return filmRepository.getFilms(filter);
  }

  async deleteFilms(_id: string): Promise<Film> {
    return filmRepository.deleteFilm(_id);
  }
}

export const filmService = new FilmService();
