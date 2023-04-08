const express = require('express');
const router = express.Router();
const signUpValidation = require("../utils/validations")
const socialValidation = require("../utils//socialValidation")
const checkUserExists = require("../middlewares/verifySignUp")
const verifyToken = require("../middlewares/authToken");
const signup = require("../controllers/authController");
const socialSignup = require("../controllers/socialSignup");

router.post('/signup', [signUpValidation, checkUserExists], signup);

router.post('/social',  [socialValidation, checkUserExists], socialSignup);

router.get('/test', verifyToken, (req, res)=> {res.json({message : "you are authenticated"})})

module.exports = router