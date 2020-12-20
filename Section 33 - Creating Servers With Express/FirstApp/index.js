const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('We got a new request!');
//   // res.send('HELLO, WE GOT YOUR REQUEST! THIS IS OUR RESPONSE!!');
//   res.send('<h1>This is my webpage!</h1>');
// });

app.get('/', (req, res) => {
  res.send('<h1>Welcome to our homepage!!</h1>');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing PostId: ${postId} on the ${subreddit} subreddit!</h1>`);
});

app.post('/cats', (req, res) => {
  res.send(
    'POST REQUEST TO /cats!! THIS IS TOTALLY DIFFERENT FROM A GET REQUEST!'
  );
});

app.get('/cats', (req, res) => {
  res.send('MEOW!!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!!');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('<h1>NOTHING FOUND IF NOTHING SEARCHED!</h1>');
  }
  res.send(`<h1>Search results for ${q}:</h1>`);
});

app.get('*', (req, res) => {
  res.send(`I don't know that path!`);
});
// /cats => 'MEOW!!'
// /dogs => 'WOOF!!'
// '/' => 'Welcome to our home!'

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
