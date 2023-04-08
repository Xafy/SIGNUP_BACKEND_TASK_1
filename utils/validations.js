const { check } = require("express-validator");

module.exports = [
    check('firstName').not().isEmpty(),
    check('lastName').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6}),
    check('agreement').not().isEmpty(),
]