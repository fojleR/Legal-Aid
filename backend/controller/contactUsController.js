const QuestionModel = require("../models/contactUsModel");
const validator = require("validator");

const contactUs = async (req, res) => {
    const { firstName, secondName, email, phoneNumber, message } = req.body;
    try {
        // let user = await userModel.findOne({email});
        // if(user) return res.status(400).json("User with the given email already exists...");
        // if(!userName || !email || !password) return res.status(400).json("All fields are required...");
        // if(!validator.isEmail(email)) return res.status(400).json("Email must be a valid email...");
        // if(!validator.isStrongPassword(password)) return res.status(400).json("Password must be a valid strong Password...");
        const question = new QuestionModel({ firstName, secondName, email, phoneNumber, message });

        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(user.password, salt);
        await question.save();
        // const token = createToken(user._id);
        res.status(200).json({ firstName, secondName, email, phoneNumber, message });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = { contactUs };
