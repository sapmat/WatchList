import MyError from "../Middleware/Errors/MyError";
import filmModel, { Film } from "../Models/Entity/film.model";
import { FilterType } from "../Models/Interfaces/query";

export class FilmRepository {
  async createFilm(data: Partial<Film>): Promise<Film> {
    const film: Film | null = await filmModel.findOne({ name: data.name });

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

  async getFilms(filter: FilterType): Promise<Film[]> {
    const {
      name = "",
      style = "",
      type = "",
      matenRatingStart = 0,
      matenRatingEnd = 10,
      delaRatingStart = 0,
      delaRatingEnd = 10,
      averageRatingStart = 0,
      averageRatingEnd = 10,
      status = "",
      createdAtStart = "2024-10-11T22:00:00.000Z",
      createdAtEnd = "4024-10-11T22:00:00.000Z",
    } = { ...filter };

    return filmModel.aggregate([
      {
        $match: {
          name: { $regex: name, $options: "i" },
          style: { $regex: style, $options: "i" },
          type: { $regex: type, $options: "i" },
          matenRating: {
            $gte: matenRatingStart,
            $lte: matenRatingEnd,
          },
          delaRating: {
            $gte: delaRatingStart,
            $lte: delaRatingEnd,
          },
          averageRating: {
            $gte: averageRatingStart,
            $lte: averageRatingEnd,
          },
          status: { $regex: status, $options: "i" },
          createdAt: {
            $gte: new Date(createdAtStart),
            $lte: new Date(createdAtEnd),
          },
        },
      },
    ]);
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

export const filmRepository = new FilmRepository();
