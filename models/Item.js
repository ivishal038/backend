const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  title: String,
  description: String,
  images: [String],
  options: [String]
});

module.exports = mongoose.model('Item', ItemSchema);
