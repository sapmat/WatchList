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
  matenRating: number;
  delaRating: number;
  averageRating: number;
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
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10,
    },
  },
  { autoIndex: true, timestamps: true }
);

export default mongoose.model<Film>("film", FilmSchema);
