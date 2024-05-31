const express = require('express');
const models = require('./models');
const sequelize = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Пример маршрута для получения данных о гостинице
app.get('/', async (req, res) => {
  const hotel = await models.Hotel.findByPk(req.params.id);
  res.json(hotel);
});

// Запуск сервера
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});