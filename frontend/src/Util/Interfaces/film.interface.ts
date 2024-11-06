import { FilmStyle, FilmType, WatchStatus } from "../Enums/enum";

export interface Film {
  _id: string;
  style: FilmStyle;
  type: FilmType;
  name: string;
  status: WatchStatus;
  matenRating: number;
  delaRating: number;
  averageRating: number;
  createdAt: Date;
}
