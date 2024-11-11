import Joi from "joi";
import { errorMessages } from "../_utils/messages/errorMessages";

const envSchema = Joi.object({
  MONGO_URI: Joi.string().required(),
  MORGAN_FORMAT: Joi.string().required(),
  NEXT_PUBLIC_ENVIRONMENT: Joi.string().required(),
  NEXT_PUBLIC_LOG_LEVEL: Joi.string().required(),
})
  .unknown()
  .required();

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(errorMessages.envValidationErr(error.message));
}

export const MONGO_URI = value.MONGO_URI;
export const MORGAN_FORMAT = value.MORGAN_FORMAT;
export const ENVIRONMENT = value.NEXT_PUBLIC_ENVIRONMENT;
export const LOG_LEVEL = value.NEXT_PUBLIC_LOG_LEVEL;
