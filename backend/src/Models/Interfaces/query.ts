import { FilmStyle, FilmType, WatchStatus } from "../Enums/enum";

export interface FilterType {
  name?: String;
  style?: FilmStyle;
  type?: FilmType;
  matenRatingStart?: Number;
  matenRatingEnd?: Number;
  delaRatingStart?: Number;
  delaRatingEnd?: Number;
  averageRatingStart?: Number;
  averageRatingEnd?: Number;
  status?: WatchStatus;
  createdAtStart?: Date;
  createdAtEnd?: Date;
}
