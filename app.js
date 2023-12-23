const express = require('express');

const todoRouter = require('./routes/todoRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json());

app.use('/api/v1/todos', todoRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
