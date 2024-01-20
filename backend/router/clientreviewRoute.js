const express = require("express");
const {getCaseStudy} = require("../controller/caseStudyController")
const {getClientreview} = require("../controller/clientreviewController")

const router = express.Router();

router.get("/getClientreview", getClientreview);


module.exports = router;