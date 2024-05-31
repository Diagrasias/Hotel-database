const Sequelize = require('sequelize');
const sequelize = require('../db');

const CleaningSchedule = sequelize.define('cleaning_schedule', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  employee_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  day_of_week: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  floor: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = CleaningSchedule;