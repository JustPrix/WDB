const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol, that is so funny!',
  },
  {
    id: uuid(),
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog',
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd',
  },
  {
    id: uuid(),
    username: 'onlysaywoof',
    comment: 'woof woof woof',
  },
];

// Index: GET /comments - list all comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

// New: GET /comments/new - form to create new comment
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

// Create: POST /comments - create a new comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
});

// Show: GET /comments/:id - get one comment (using ID)
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/show', { comment });
});

// Update: PATCH /comments/:id - update one comment (using ID)
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments');
});

//Edit: GET /comments/:id/edit - form to edit specific comment
app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/edit', { comment });
});

// Destroy: DELETE /comments/:id - destroy one comment (using ID)
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response!');
});

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(
    `OK, here ${qty > 1 ? 'are' : 'is'} your ${qty} ${meat} ${
      qty > 1 ? 'tacos' : 'taco'
    }!`
  );
});

app.listen(3000, () => {
  console.log('ON PORT 3000!');
});
