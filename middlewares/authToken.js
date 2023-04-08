const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

module.exports = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers.authorization.split(' ')[1] ;
    
    if (!token){
        return res.status(403).json({message: "No token provided"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Unauthorized!!"});
        }

        req.userId = decoded.id;
        next();
    })
}