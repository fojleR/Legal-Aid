const clientreviewModel = require("../models/clientReviewe")
const validator = require("validator");


const getClientreview = async(req, res) => {
    try {
        const advocate = await clientreviewModel.find();
        res.status(200).json(advocate); // This should be res.status(200).json(advocate);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



module.exports = {getClientreview};