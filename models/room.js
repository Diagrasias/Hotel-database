const Sequelize = require('sequelize');
const sequelize = require('../db');

const Room = sequelize.define('room', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  hotel_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  room_type: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price_per_day: {
    type: Sequelize.REAL,
    allowNull: false
  }
});

module.exports = Room;