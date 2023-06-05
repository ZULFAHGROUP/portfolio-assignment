/** @format */

const { details } = require("../config/db");
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
    const alreadyExist = await details.findOne({
      email: req.body.email,
    });
    if (alreadyExist) {
      return res.status(404).json({
        status: "error",
        msg: "Details already exist",
      });
    }
    details
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

const updateDetails = (req, res) => {
  try {
    details
      .updateOne({ _id: req.body_id }, { $set: req.params.id })
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
          msg: "User update failed",
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

const getAllDetails = async (req, res) => {
  try {
    const info = await details.find();
    res.status(200).json({
      status: "OK",
      data: info,
    });
  } catch (error) {
    res.status(201).json({
      ok: true,
      msg: error.message,
    });
  }
};

module.exports = { createDetails, updateDetails, getAllDetails };
