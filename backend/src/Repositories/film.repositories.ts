import MyError from "../Middleware/Errors/MyError";
import filmModel, { Film } from "../Models/Entity/film.model";

export class FilmRepository {
  async createFilm(data: Partial<Film>): Promise<Film> {
    const film: Film | null = await filmModel.findOne({ name: data.name});

    if (film) {
      throw new MyError({
        code: 400,
        message: "Film name already exists",
      });
    }

    return filmModel.create(data);
  }

  async updateFilm(data: Film): Promise<Film> {
    const film: Film | null = await filmModel.findOneAndUpdate(
      { _id: data._id },
      { ...data },
      { new: true }
    );

    if (!film) {
      throw new MyError({
        code: 404,
        message: "Film not available",
      });
    }

    return film;
  }

  async getFilm(_id: string): Promise<Film> {
    const film: Film | null = await filmModel.findById({ _id });

    if (!film)
      throw new MyError({
        code: 404,
        message: "Film not found",
      });

    return film;
  }

  async getFilms(): Promise<Film[]> {
    return filmModel.find();
  }

  async deleteFilm(_id: string): Promise<Film> {
    const film: Film | null = await filmModel.findOneAndDelete({ _id });

    if (!film)
      throw new MyError({
        code: 404,
        message: "Film not found",
      });

    return film;
  }
}

export const FilmRepositories = new FilmRepository();
