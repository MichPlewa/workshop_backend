exports.isLoggedIn = (req, res, next) => {
  console.log('login', req.session);
  if (!req.session.login) {
    return res.redirect('/no');
  } else {
    next();
  }
};
