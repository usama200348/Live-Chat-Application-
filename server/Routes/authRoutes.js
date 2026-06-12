const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Model/User');
// const { use } = require("react");

const chatRoute = express.Router();

chatRoute.post("/register",async(req,res)=>{
    try{
        const {username,email,password} = req.body;

        const userExit = await User.findOne({email});
        if (userExit) {
         return res.status(400).json({
            message:"Entered Email Already Exists"
         });
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        });

        res.status(201).json(user);

    }catch(error){
        // Checking Internal Server Error
        res.status(500).json(error)
        console.log("Getting Internal Server Error Please Check : " , error);
        
    }
})


// Now Making Route On Login

chatRoute.post('/login',async(req,res)=>{
    try{
        // Getting Email Password From Body
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                message:"Enter Email Not Found "
            });

            const comparedPassword = await bcrypt.compare(
                password,
                user.password
            );
            if (!comparedPassword) {
                return res.status(400).json({
                    message:"Invalid Credentials Entered"
                });
            }
const token = jwt.sign(
    {
        id:user._id,
    },
    process.env.JWT_SECERT
);

res.status(200).json({
    token,
    user,
});
        }
    }
    catch(error){
        // Checking Internal Server Error
        res.status(500).json(error)
        console.log("Getting Internal Server Error Please Check : " , error);
        
    }
})

module.exports = chatRoute