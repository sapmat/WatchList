import mongoose, { Document, Schema } from "mongoose";
import { FilmStyle, FilmType, WatchStatus } from "../Enums/enum";

export interface PartialFilm extends Document {
  style: FilmStyle;
  type: FilmType;
  name: string;
}

export interface Film extends Document {
  _id: string;
  style: FilmStyle;
  type: FilmType;
  name: string;
  status: WatchStatus;
  matenRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  delaRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const FilmSchema: Schema = new Schema(
  {
    style: {
      type: String,
      enum: Object.values(FilmStyle),
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(FilmType),
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(WatchStatus),
      default: WatchStatus.TO_WATCH,
    },
    matenRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10,
    },
    delaRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10,
    },
  },
  { autoIndex: true }
);

export default mongoose.model<Film>("film", FilmSchema);
