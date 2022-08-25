const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: { type: String, require, minLenght: 10, maxLenght: 50 },
  content: { type: String, require, minLenght: 20, maxLenght: 1000 },
  publishDate: { type: String, require },
  price: { type: Number, require },
  reqDestination: { type: String, require },
  sellerInfo: { type: String, require },
});

//dodać zdj do modelu i bazy danych

module.export = mongoose.model('Ad', adSchema);
