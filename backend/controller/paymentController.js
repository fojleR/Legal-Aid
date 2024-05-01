const PaymentModel = require("../models/paymentModel");

const processPayment = async (req, res) => {
    const { email, name, method, transID } = req.body;
    try {
        const payment = new PaymentModel({ email, name, method, transID });
        await payment.save();
        res.status(200).json({ message: "Payment processed successfully", payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { processPayment };
