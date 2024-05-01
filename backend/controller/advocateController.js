const advocateModel = require("../models/advocateModel")
const validator = require("validator");


const getAdvocate = async(req, res) => {
    try {
        const advocate = await advocateModel.find();
        res.status(200).json(advocate); // This should be res.status(200).json(advocate);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


module.exports = {getAdvocate};