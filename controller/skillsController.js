/** @format */

const collections = require("../config/db");
const validateSkills = require("../validation/skilsValidation");

const creatSkills = (req, res) => {
  try {
    const { error, value } = validateSkills(req.body);
    if (error !== undefined) {
      res.status(400).json({
        ok: false,
        msg: error.skills[0].message,
      });
      return;
    }
    collections.skills
      .insertOne(req.body)
      .then((result) => {
        console.log(result);

        res.status(200).json({
          ok: true,
          msg: "User created successfully",
        });
      })
      .catch((err) => {
        console.log(err);

        res.status(400).json({
          ok: false,
          msg: "Create user failed",
          error: err.message,
        });
      });
  } catch (error) {
    res.status(201).json({
      ok: true,
      msg: error.message,
    });
  }
};

const updateSkills = () => {
  try {
    collections.skills
      .findOneAndUpdate(req.body)
      .then((result) => {
        console.log(result);

        res.status(200).json({
          ok: true,
          msg: "User updated successfully",
        });
      })
      .catch((err) => {
        console.log(err);

        res.status(400).json({
          ok: false,
          msg: "User user failed",
          error: err.message,
        });
      });
  } catch (error) {
    res.status(201).json({
      ok: true,
      msg: error.message,
    });
  }
};

module.exports = { creatSkills, updateSkills };
