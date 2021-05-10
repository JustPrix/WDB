const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

// app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use('/dogs', (req, res, next) => {
  console.log('I love dogs!!');
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  throw new AppError('Password required', 401);
  // throw new AppError('Password required!', 401);
};

app.get('/', (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send('Home page!');
});

app.get('/error', (req, res) => {
  chicken.fly();
});

app.get('/dogs', (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send('Woof woof!');
});

app.get('/secret', verifyPassword, (req, res) => {
  res.send(
    'When I am feeling down, I like to just drown in my sorrow to feel something!'
  );
});

app.get('/admin', (req, res, next) => {
  throw new AppError('You are not an Admin!', 403);
});

app.use((req, res) => {
  res.status(404).send('NOT FOUND!!');
});

// app.use((err, req, res, next) => {
//   console.log('***************************************************');
//   console.log('***********************ERROR***********************');
//   console.log('***************************************************');
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
