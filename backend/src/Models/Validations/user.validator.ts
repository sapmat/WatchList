import * as Joi from "joi";
import { Types } from "mongoose";

export const userSchemaValidate = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  displayName: Joi.string().required(),
  groups: Joi.array()
    .items(
      Joi.string()
        .custom((value, helpers) => {
          if (!Types.ObjectId.isValid(value)) {
            return helpers.error("invalid id");
          }
          return value;
        })
        .required()
    )
    .optional(),
});
