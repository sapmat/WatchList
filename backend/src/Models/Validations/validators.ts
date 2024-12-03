import { filmSchemaValidate } from "./film.validator";
import { userSchemaValidate } from "./user.validator";

module.exports = {
  film: filmSchemaValidate,
  user: userSchemaValidate,
};
