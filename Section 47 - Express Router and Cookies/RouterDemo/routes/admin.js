const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send('SORRY, NOT ADMIN!');
});

router.get('/topsecret', (req, res) => {
  res.send('This is top secret!');
});

router.get('/deleteverything', (req, res) => {
  res.send('DELETE IT ALL!');
});

module.exports = router;
