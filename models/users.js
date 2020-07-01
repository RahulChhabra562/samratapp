const { db } = require('../db/database');
const Sequelize = require('sequelize');


const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}


const Users = db.define('user', {
    id: COL_ID_DEF,
    username: {
        type: Sequelize.DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: Sequelize.DataTypes.STRING(50),
        
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        isEmail: true,
        unique: true,
        allowNull: false
    },
    dob: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    }


});

module.exports = {
    Users
}