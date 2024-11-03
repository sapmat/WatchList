import { FilmStyle, FilmType, WatchStatus } from "./Util/Enums/enum";
import { Film } from "./Util/Interfaces/film.interface";

export const films: Film[] = [
  {
    _id: "0",
    style: FilmStyle.ANIME,
    type: FilmType.SERIES,
    name: "Fullmetal Alchamist: Brotherhood",
    status: WatchStatus.WATCHING,
    matenRating: 10,
    delaRating: 0,
  },
];
