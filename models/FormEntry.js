const mongoose = require('mongoose');

const FormEntrySchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  message: String,
  categoryTitle: String,
  serviceTitle: String,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FormEntry', FormEntrySchema);
