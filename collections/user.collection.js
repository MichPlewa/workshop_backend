const User = require('../modles/user.model');
const bcrypt = require('bcryptjs');
const { isLoggedIn } = require('../utils/middleware');
const getImageFileType = require('../utils/getImageFileType');

exports.register = async (req, res) => {
  const fileType = await getImageFileType(req.file);
  const { login, password, avatar } = req.body;
  try {
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string' &&
      req.file &&
      ['image/png', 'image/jpeg', 'image/gif'].includes(fileType)
    ) {
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        return res
          .status(409)
          .send({ message: 'User wirh this login already exists' });
      }
      const user = await User.create({
        login,
        password: await bcrypt.hash(password, 10),
        avatar: req.file.filename,
      });
      res.status(201).send({ message: 'User created' + user.login });
    } else res.status(400).send({ message: 'Bad request' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string'
    ) {
      const user = await User.findOne({ login });
      if (!user) {
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.login = user.login;
          req.session.save();
          console.log(req.session.login, user.login);
          res.status(200).send({ message: 'Login successful' });
        } else {
          res.status(400).send({ message: 'Login or Password is incorrect' });
        }
      }
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.logout = async (req, res) => {
  try {
    if (isLoggedIn) {
      req.session.destroy();
    } else {
      res.status(400).send({ message: 'Not found' });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
