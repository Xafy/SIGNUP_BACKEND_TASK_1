const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs")

module.exports = async (req, res, next) => {
    try {
        const {firstName, lastName, email} = req.body;

        const user = await User.create({
            firstName,
            lastName,
            email,
            password : bcrypt.hashSync(" ", 10)
        })
        
        let token;
        if(user){
            token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 })
        }

        res.json({message : "user registered successfuly" , user, token})
    } catch (err) {
        res.json({message : `could not signup error : ${err} `} )
    }
}