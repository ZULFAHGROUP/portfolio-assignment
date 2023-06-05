/** @format */
/** @format */

const { creatSkills, updateSkills } = require("../controller/skillsController");

const router = require("express").Router();

// Details route
router.post("/create-skills", creatSkills);
router.put("/updated-skills", updateSkills);

module.exports = router;
