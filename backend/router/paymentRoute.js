const express = require("express");
const { processPayment } = require("../controller/paymentController");

const router = express.Router();

router.post("/processPayment", processPayment);

module.exports = router;
