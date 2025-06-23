const connectMongo = require('../lib/connectMongo');
const Category = require('../models/Category');

module.exports = async (req, res) => {
  await connectMongo();

  if (req.method === 'GET') {
    const { serviceId } = req.query;

    if (!serviceId) {
      return res.status(400).json({ message: 'Missing serviceId in query params' });
    }

    try {
      const categories = await Category.find({ serviceId });
      return res.status(200).json(categories);
    } catch (err) {
      return res.status(500).json({ error: 'Server Error', details: err.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const category = new Category(req.body);
      await category.save();
      return res.status(201).json(category);
    } catch (err) {
      return res.status(400).json({ error: 'Could not save category', details: err.message });
    }
  }

  res.status(405).json({ message: 'Method Not Allowed' });
};
