import Joi from "joi";

export const updateProfileSchema = Joi.object({
  country: Joi.string().required().messages({
    "string.base": `"country" should be a type of 'text'`,
    "string.empty": `"country" cannot be empty`,
    "any.required": `"country" is a required field`,
  }),

  countryFlag: Joi.string().messages({
    "string.base": `"countryFlag" should be a type of 'text'`,
    "string.empty": `"countryFlag" cannot be empty`,
    "any.required": `"countryFlag" is a required field`,
  }),

  drivingLicense: Joi.string().alphanum().min(6).max(12).required().messages({
    "string.base": `"drivingLicense" should be a type of 'text'`,
    "string.empty": `"drivingLicense" cannot be empty`,
    "string.alphanum": `"drivingLicense" should contain only alphanumeric characters`,
    "string.min": `"drivingLicense" should have a minimum length of 6`,
    "string.max": `"drivingLicense" should have a maximum length of 12`,
    "any.required": `"drivingLicense" is a required field`,
  }),
});
