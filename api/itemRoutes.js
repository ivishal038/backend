const connectMongo = require('../lib/connectMongo');
const Item = require('../models/Item');

module.exports = async (req, res) => {
  await connectMongo();

  if (req.method === 'GET') {
    const { categoryId } = req.query;

    if (!categoryId) {
      return res.status(400).json({ message: 'Missing categoryId in query params' });
    }

    try {
      const items = await Item.find({ categoryId });
      return res.status(200).json(items);
    } catch (err) {
      return res.status(500).json({ error: 'Server Error', details: err.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const item = new Item(req.body);
      await item.save();
      return res.status(201).json(item);
    } catch (err) {
      return res.status(400).json({ error: 'Could not save item', details: err.message });
    }
  }

  res.status(405).json({ message: 'Method Not Allowed' });
};
