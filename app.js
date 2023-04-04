const express = require('express');

const app = express();

app.use(express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

app.use(express.static('build'));
app.use('/public', express.static('public'));

const mongoose = require('mongoose');

const middleware = require('./utils/middleware.js');
const logger = require('./utils/logger.js');

const config = require('./utils/config.js');
logger.info('connecting to', config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(middleware.requestLogger);

const itemsRouter = require('./controllers/items.js');
app.use('/api/items', itemsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
