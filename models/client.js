const Sequelize = require('sequelize');
const sequelize = require('../db');

const Client = sequelize.define('client', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  full_name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  passport_number: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  from_city: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  room_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  place: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  arrival_date: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  payment: {
    type: Sequelize.REAL,
    allowNull: false
  }
});

module.exports = Client;