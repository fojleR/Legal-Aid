const express = require("express");
const {getAdvocate} = require("../controller/advocateController")
const {registerUser} = require("../controller/userController");

const router = express.Router();

router.get("/getAdvocate", getAdvocate);


module.exports = router;