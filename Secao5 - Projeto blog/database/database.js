const Sequelize  = require("sequelize");


const connection = new Sequelize('guiapress', 'root', '157455', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;