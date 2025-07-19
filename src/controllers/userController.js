const User = require('../models/user');
const mongoose = require('mongoose');
exports.hello = async (req, res) => {
  const users = await User.find();
  res.json({ message: 'Hello from backend!', users });
};

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Field Tidak Lengkap" })
    }

    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(400).json({ message: "Username atau password salah" })
    }

    return res.status(200).json({
      message: "Login berhasil",
      user
    })
  }
  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find().limit(20);
    //const user = await mongoose.connection.db.collection('user').find({}).limit(5).toArray();
    //console.log(user);
    return res.status(200).json({ user });
  }
  catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

exports.getUserDetail = async (req, res) => {
  try {
  const { userId } = req.body; 
    if (!userId) {
      return res.status(400).json({ message: "Not Valid" })
    }

    const userDetail = await User.findById(userId);

    if (!userDetail) {
      return res.status(400).json({ message: "Not Found" })
    }

    return res.status(200).json({ userDetail });

  }
  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}


exports.getUserFilter = async (req, res) => {
  try {
    const jobVacancyId = req.body;

    const vacancyIds = jobVacancyId.map(id => new mongoose.Types.ObjectId(id));

    const users = await User.find({ jobVacancies: { $in: vacancyIds } })
      .populate('jobVacancies')
      .limit(20);

    if (!users) {
      return res.status(400).json({ message: "Not Found" })
    }

    return res.status(200).json({ users });
  }
  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}