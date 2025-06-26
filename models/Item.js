const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
  title: String,
  image: String,
  bulletPoints: [String]
});

const ItemSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  title: String,
  description: String,
  images: [String],
  options: [OptionSchema]
});

module.exports = mongoose.model('Item', ItemSchema);
