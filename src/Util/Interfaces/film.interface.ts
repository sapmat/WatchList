import { FilmStyle, FilmType, WatchStatus } from "../Enums/enum";

export interface Film {
  _id: string;
  style: FilmStyle;
  type: FilmType;
  name: string;
  status: WatchStatus;
  matenRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  delaRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
