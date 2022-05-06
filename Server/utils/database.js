//Connecting in a db (postgreSQL)
//Import sequelize
const { Sequelize } = require('sequelize');

//Connecting to db
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'aoki9676',
    database: 'bank',
    logging: false
});

module.exports = {db}