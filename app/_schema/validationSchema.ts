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

export const editReservationSchema = Joi.object({
  reservationId: Joi.string().required().messages({
    "string.base": `"reservationId" should be a type of 'text'`,
    "string.empty": `"reservationId" cannot be empty`,
    "any.required": `"reservationId" is a required field`,
  }),

  numberOfPassengers: Joi.number().required().messages({
    "number.base": `"numberOfPassengers" should be a type of 'number'`,
    "number.empty": `"numberOfPassengers" cannot be empty`,
    "any.required": `"numberOfPassengers" is a required field`,
  }),

  description: Joi.string().min(0).max(500).messages({
    "string.base": `"description" should be a type of 'text'`,
    "string.min": `"description" should have a minimum length of 10 characters`,
    "string.max": `"description" should have a maximum length of 500 characters`,
  }),
});
