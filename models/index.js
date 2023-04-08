const config = require("../config/db.config");
const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PSSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false,

        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.user = require("../models/user")(sequelize, Sequelize);

module.exports = db;