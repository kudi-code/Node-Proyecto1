//Connecting to db thanks to Sequelize
const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const User = db.define('user', {
    id: { //Llave primaria
        primaryKey: true,
        autoIncrement: true, //Que la db autogestione los valores
        type: DataTypes.INTEGER , //tipo de dato universal en sequielize
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING , //tipo de dato universal en sequielize
        unique: false,
        allowNull: false
    },
    accountNumber:{
        type: DataTypes.STRING , //tipo de dato universal en sequielize
        unique: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING , //tipo de dato universal en sequielize
        allowNull: false
    },
    amount:{
        type: DataTypes.FLOAT , //tipo de dato universal en sequielize
        allowNull: false,
        defaultValue: 1000
    },
    status:{
        type : DataTypes.STRING,
        defaultValue: 'available'
    }
})

module.exports = {User}
