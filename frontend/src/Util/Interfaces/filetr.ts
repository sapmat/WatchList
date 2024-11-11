import { FilmStyle, FilmType, WatchStatus } from "../Enums/enum";

export interface FilterType {
  name?: string;
  style?: FilmStyle | "";
  type?: FilmType | "";
  matenRatingStart?: number;
  matenRatingEnd?: number;
  delaRatingStart?: number;
  delaRatingEnd?: number;
  averageRatingStart?: number;
  averageRatingEnd?: number;
  status?: WatchStatus | "";
  createdAtStart?: Date;
  createdAtEnd?: Date;
}
