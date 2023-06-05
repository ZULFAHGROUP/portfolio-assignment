/** @format */

const {
  createDetails,
  updateDetails,
} = require("../controller/detailsController");

const router = require("express").Router();

// Details route
router.post("/create-details", createDetails);
router.put("/updated-details", updateDetails);

module.exports = router;
