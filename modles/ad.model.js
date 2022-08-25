const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: { type: String, required: true, minLenght: 10, maxLenght: 50 },
  content: { type: String, required: true, minLenght: 20, maxLenght: 1000 },
  publishDate: { type: String, required: true },
  price: { type: Number, required: true },
  reqDestination: { type: String, required: true },
  sellerInfo: { type: String, required: true },
});

//dodać zdj do modelu i bazy danych

module.export = mongoose.model('Ad', adSchema);
