import mongoose, { Document, Schema, ObjectId } from "mongoose";
import { FilmStyle, FilmType } from "../Enums/enum";

export interface RequestBodyFilm {
  name: string;
  style: FilmStyle;
  type: FilmType;
  image?: Buffer;
}

export interface Film extends Document {
  _id: ObjectId;
  name: string;
  filmId: string;
  style: FilmStyle;
  type: FilmType;
  totalRating: number;
  totalRaters: number;
  image: Buffer;
}

const FilmSchema: Schema = new Schema(
  {
    filmId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
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
    totalRating: {
      type: Number,
      default: 0,
    },
    totalRaters: {
      type: Number,
      default: 0,
    },
    image: {
      type: Buffer,
    },
  },
  { autoIndex: true, timestamps: true }
);

export default mongoose.model<Film>("film", FilmSchema);
