const connectMongo = require('../lib/connectMongo');
const Service = require('../models/Service');

module.exports = async (req, res) => {
  await connectMongo();

  if (req.method === 'GET') {
    const services = await Service.find();
    return res.status(200).json(services);
  }

  if (req.method === 'POST') {
    const newService = new Service(req.body);
    await newService.save();
    return res.status(201).json(newService);
  }

  res.status(405).end(); // Method Not Allowed
};
