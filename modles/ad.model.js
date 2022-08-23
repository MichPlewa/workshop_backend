const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: { type: String, require, minLenght: 10, maxLenght: 50 },
  content: { type: String, require, minLenght: 20, maxLenght: 1000 },
  publishDate: { type: String, require },
  img: { type: File, require },
  price: { type: Number, require },
  reqDestination: { type: String, require },
  sellerInfo: { type: String, require },
});

modler.export = mongoose.model('Ad', adSchema);
