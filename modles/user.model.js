const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: { type: String, require },
  password: { type: String, require },
  avatar: { type: String, require },
  phone: { type: Number, require },
});

module.exports = mongoose.model('User', userSchema);
