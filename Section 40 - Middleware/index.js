const express = require('express');
const app = express();
const morgan = require('morgan');

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
  res.send('SORRY, YOU NEED A PASSWORD!');
};

// app.use((req, res, next) => {
//   console.log('This is my first middleware!!');
//   return next();
// });
// app.use((req, res, next) => {
//   console.log('This is my second middleware!!');
//   return next();
// });

app.get('/', (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send('Home page!');
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

app.use((req, res) => {
  res.status(404).send('NOT FOUND!!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
