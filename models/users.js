const { db } = require('../db/database');
const Sequelize = require('sequelize');


const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    unique: true,
    primaryKey: true
}


const Users = db.define('user', {
    id: COL_ID_DEF,
    username: {
        type: Sequelize.DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    firstname: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: Sequelize.DataTypes.STRING(50)
    }

});

module.exports = {
    Users
}