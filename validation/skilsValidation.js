/** @format */

const Joi = require("joi");

const validateSkills = (data) => {
  const skillsSchema = Joi.object({
    skillname: Joi.string().required(),
    description: Joi.string(),
    rating: Joi.string(),
  });
  return skillsSchema.validate(data);
};

module.exports = validateSkills;
