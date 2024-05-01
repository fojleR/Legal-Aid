const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const userRoute = require("./router/userRoute");
const advocateRoute = require('./router/advocateRoute'); // Destructure the chatRoute and server
const caseStudyRoute = require("./router/caseStudyRoute");
const contactUsRoute = require("./router/contactUsRoute");
const paymentRouter = require("./router/paymentRoute");
const clientreviewRouter = require("./router/clientreviewRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/advocate", advocateRoute);
app.use("/api/caseStudy", caseStudyRoute);
app.use("/api/contactUs",contactUsRoute);
app.use("/api/payment", paymentRouter);
app.use("/api", paymentRouter);
// Use chatRoute as middleware


const port = 5000;
const uri = process.env.MONGODB_URI;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

mongoose.connect("mongodb://127.0.0.1:27017/LegalAid").then(function(){
    console.log("Database is connected successfully.");
}).catch(function(err){
    console.log(err);
});
