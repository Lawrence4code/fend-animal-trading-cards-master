const passport = require('passport');

// google oauth handler
// 'google' does the trick here, its let the route to authenticate using certain strategy
// this route will be intiated by the user
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  // this route is for google oauth return callback
  app.get('/auth/google/callback', passport.authenticate('google'));

  // handling logout
  // this route will be initiated by the user
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // handling existing user with the help of cookies provided at the tine of login
  // this route will be initiated when???
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
