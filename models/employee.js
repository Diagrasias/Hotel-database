const Sequelize = require('sequelize');
const sequelize = require('../db');

const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  full_name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  hotel_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Employee;