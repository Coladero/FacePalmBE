const router = require("express").Router();
const UserModel = require("../models/User.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuthed = require("../middleware/isAuthed")


                    //////!SignUp//////
//*Line9, create route for signup.
router.post("/signup" , async (req, res, next) =>{
    const {name, surname, email, password} = req.body;
    //*1.Line 12, make sure the user fill all the fields.
    if (!name || !surname || !email || !password){
        res.status(400).json({errorMessage:"You have to fill in all the fields."})
        return;
    }

    try{
        //*2.Line19, check if the user exist by email
        const checkUser = await UserModel.findOne({email})
        if(checkUser){
            res.status(400).json({errorMessage:"The User exist."})
            return;
        }
        //*3.Line25, if the user not exist, now Create the user here & crypt the password.
        const salt = await bcrypt.genSalt(12)
        const hashedPass = await bcrypt.hash(password,salt)
        //* 3.1 Line28, create the user with all the details form the form.
        await UserModel.create({
            name,
            surname,
            email,
            password:hashedPass
        })
        res.status(201).json()
    }catch(err){
        next(err)
    } 
    
})


                    //////!Login//////
//*Line44, create route for login.
router.post("/login", async (req, res, next)=>{
    const {email, password} = req.body

    //*1. Line49, check if the user fill up all the fields

    if(!email || !password){
        res.status(400).json({errorMessage:"You have to fill in all the fields."})
        return;
    }

    //*2.Line56, check if the user exist in the DB by email
    try{
        const checkUser = await UserModel.findOne({email})
        if(!checkUser){
            res.status(401).json({errorMessage:"The User doesn't exist in our DB."})
            return;
        }
        //*3.Line62, check if the password is correct.
        const isPassCorrect = await bcrypt.compare(password,checkUser.password)
        if(!isPassCorrect){
            res.status(401).json({errorMessage:"Password incorrect, try again."})
            return;
        }
        //*4.Line68, now that is everything OK, give the token to the User, use payload.
        const payload = {
            _id:checkUser._id,
            email:checkUser.email,
            name:checkUser.name,
            surname:checkUser.surname
        }
        //*4.1.Line75, now give the authToken to the user.
        const authToken = jwt.sign(
            payload,
            process.env.SECRET_TOKEN,
            {algorithm: "HS256", expiresIn: "1h"}
        )
        res.status(200).json({authToken})
    }catch(err){
        next(err)
    }


})

router.get("/verify", (req, res, next)=>{
    res.status(200).json()
} )

module.exports = router