const caseStudyModel = require("../models/caseStudyModel");
const validator = require("validator");


const getCaseStudy = async(req, res) => {
    try {
        const advocate = await caseStudyModel.find();
        res.status(200).json(advocate); // This should be res.status(200).json(advocate);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



module.exports = {getCaseStudy};