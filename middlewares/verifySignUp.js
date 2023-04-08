const db = require("../models/index");

const User = db.user;

module.exports = async (req, res, next) => {
    try {
        let user = await User.findOne({
            where: {email: req.body.email}
        });

        if(user){
            res.status(400).json({message : "a user with the same email already exists"});
            return ;
        }

        next();
    } catch{}
}

