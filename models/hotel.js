const Sequelize = require('sequelize');
const sequelize = require('../db');

const Hotel = sequelize.define('hotel', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Hotel;