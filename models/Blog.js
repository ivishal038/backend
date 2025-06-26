const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  heading: String,
  paragraph: String,
  bulletPoints: [String]
});

const BlogSchema = new mongoose.Schema({
  title: String,
  image: String,
  date: String,
  department: String,
  sections: [SectionSchema]
});

module.exports = mongoose.model('Blog', BlogSchema);
