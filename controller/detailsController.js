/** @format */

const collections = require("../config/db");
const validateDetails = require("../validation/detailsValidation");

const createDetails = async (req, res) => {
  try {
    const { error, value } = validateDetails(req.body);
    if (error !== undefined) {
      res.status(400).json({
        ok: false,
        msg: error.details[0].message,
      });
      return;
    }
    const alreadyExist = await collections.details.findOne({
      email: email,
    });
    if (alreadyExist) {
      return res.status(404).json({
        status: "error",
        msg: "Details already exist",
      });
    }
    collections.details
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

const updateDetails = () => {
  try {
    collections.details
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

module.exports = { createDetails, updateDetails };
