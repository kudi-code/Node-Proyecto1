//Connecting to db thanks to Sequelize
const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const Transfer = db.define('transfers', {
    id: { //Llave primaria
        primaryKey: true,
        autoIncrement: true, //Que la db autogestione los valores
        type: DataTypes.INTEGER , 
        unique: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER , 
        unique: false,
        allowNull: false
    },
    senderUserId:{
        type: DataTypes.INTEGER ,
        allowNull: false

    },
    receiverUserId:{
        type: DataTypes.INTEGER , 
        allowNull: false
    }    
})

module.exports = {Transfer}
