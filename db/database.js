const Sequelize = require('sequelize');

const db = new Sequelize('samratapp', 'postgres', '10p17ew0142', {
    host: 'localhost',
    dialect: 'postgres'
  });


module.exports = {
    db
}