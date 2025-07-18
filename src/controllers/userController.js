const User = require('../models/user');

exports.hello = async (req, res) => {
  const users = await User.find();
  res.json({ message: 'Hello from backend!', users });
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};