/** @format */

const Joi = require("joi");

const validateDetails = (data) => {
  const detailsSchema = Joi.object({
    firstname: Joi.string().required(),
    surname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    likes: Joi.array().required(),
    dob: Joi.date().required(),
    phone: Joi.string().required(),
  });
  return detailsSchema.validate(data);
};

module.exports = validateDetails;
