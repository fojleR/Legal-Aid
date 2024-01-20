const express = require("express");
const {registerUser,loginUser, updateUserByEmail,findUserByEmail} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/findByEmail/:userEmail", findUserByEmail);
router.put("/updateByEmail/:userEmail", updateUserByEmail);
// router.get("/find/:userId", findUser);
// router.get("/", getUser);

module.exports = router;