const express = require('express');
const router = express.Router({ mergeParams: true });
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');

router
  .route('/register')
  .get(users.renderRegisterForm)
  .post(catchAsync(users.register));

router
  .route('/login')
  .get(users.renderLoginForm)
  .post(
    passport.authenticate('local', {
      failureFlash: 'Invalid username or password!',
      failureRedirect: '/login',
    }),
    catchAsync(users.login)
  );

router.get('/logout', users.logout);

module.exports = router;
