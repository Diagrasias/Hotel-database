const express = require('express');
const models = require('./models');
const sequelize = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;



// Запуск сервера
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});