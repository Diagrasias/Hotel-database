const Hotel = require('./hotel');
const Room = require('./room');
const Client = require('./client');
const Employee = require('./employee');
const CleaningSchedule = require('./cleaningSchedule');

Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });
Client.belongsTo(Room, { foreignKey: 'room_id' });
Employee.belongsTo(Hotel, { foreignKey: 'hotel_id' });
CleaningSchedule.belongsTo(Employee, { foreignKey: 'employee_id' });

module.exports = {
  Hotel,
  Room,
  Client,
  Employee,
  CleaningSchedule
};