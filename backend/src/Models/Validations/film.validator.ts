import * as Joi from "joi";
import { FilmStyle, FilmType } from "../Enums/enum";

export const filmSchemaValidate = Joi.object({
  style: Joi.string()
    .valid(...Object.values(FilmStyle))
    .required(),
  type: Joi.string()
    .valid(...Object.values(FilmType))
    .required(),
  name: Joi.string().required(),
});
