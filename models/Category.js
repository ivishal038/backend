const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  title: String,
  description: String,
  imageUrl: String
});

module.exports = mongoose.model('Category', CategorySchema);
