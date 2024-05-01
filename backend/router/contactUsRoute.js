const express = require("express");
const {contactUs} = require("../controller/contactUsController")

const router = express.Router();

router.post("/postContactUs", contactUs);


module.exports = router;