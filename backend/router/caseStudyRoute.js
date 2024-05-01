const express = require("express");
const {getCaseStudy} = require("../controller/caseStudyController")

const router = express.Router();

router.get("/getCaseStudy", getCaseStudy);


module.exports = router;