exports.isLoggedIn = (req, res, next) => {
  if (!req.session.login) {
    return res.redirect('/no');
  } else {
    next();
  }
};
