const userModel = require("../models/userModel")
// const bcrypt = require("bcrypt");
const validator = require("validator");
// const jwt = require("jsonwebtoken");

// const createToken = (_id)=>{
//     const jwtkey = process.env.JWT_SECRET_KEY;
//     return jwt.sign({_id}, jwtkey, {expiresIn: "3d"})
// };

const registerUser = async(req, res) =>{
    const {userName, email, password, confirmPassword} = req.body;
    try{
        let user = await userModel.findOne({email});
        if(user) return res.status(400).json("User with the given email already exist...");
        if(!userName || !email || ! password) return res.status(400).json("All field are required...");
        if(!validator.isEmail(email)) return res.status(400).json("Email must be a valid email...");
        if(!validator.isStrongPassword(password)) return res.status(400).json("Password must be a valid strong Password...");
        user = new userModel({email, userName, password, confirmPassword});
        
        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        // const token = createToken(user._id);
        res.status(200).json({_id:user._id, userName, email, password})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });

        if (!user) return res.status(400).json("Invalid email or password....");

        // const isValidPassword = await bcrypt.compare(password, user.password);

        // if (!isValidPassword) return res.status(400).json("Invalid email or password...");

        // const token = createToken(user._id);
        res.status(200).json({ _id: user._id, name: user.userName, email, paidUser: user.paidUser});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const findUser = async(req, res) =>{
    const userId = req.params.userId;
    try{
        const user = await userModel.findById(userId); 
        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
const getUser = async(req, res) =>{
    try{
        const user = await userModel.find(); 
        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const findUserByEmail = async (req, res) => {
    const userEmail = req.params.userEmail;

    try {
        const user = await userModel.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).json("User not found");
        }

        res.status(200).json({ _id: user._id, userName: user.userName, email: user.email });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const updateUserByEmail = async (req, res) => {
    const userEmail = req.params.userEmail;
    const { userName, email, password, confirmPassword, paidUser } = req.body;

    try {
        // Find the user by email
        let user = await userModel.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).json("User not found");
        }

        // Update user fields if provided in the request body
        if (userName) user.userName = userName;
        if (email) user.email = email;
        if (password) user.password = password;
        if (confirmPassword) user.confirmPassword = confirmPassword;
        if (paidUser !== undefined) user.paidUser = paidUser;

        // Validate the updated user data
        if (!validator.isEmail(user.email)) {
            return res.status(400).json("Email must be a valid email...");
        }

        // Save the updated user
        await user.save();

        res.status(200).json({ _id: user._id, userName: user.userName, email: user.email, paidUser: user.paidUser });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


module.exports = {registerUser, loginUser,updateUserByEmail,findUserByEmail};