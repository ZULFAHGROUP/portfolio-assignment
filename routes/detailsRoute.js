/** @format */

const {
  createDetails,
  updateDetails,
  getAllDetails,
} = require("../controller/detailsController");

const router = require("express").Router();

// Details route
router.post("/create-details", createDetails);
router.put("/:id", updateDetails);
router.get("/", getAllDetails);

module.exports = router;
