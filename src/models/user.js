const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const userSchema = new mongoose.Schema({
  _id: { type: Types.ObjectID, required: true },
  nama: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  tanggalLahir: { type: Date, required: true },
  tempatLahir: { type: String },
  statusJob: { type: Boolean, default: false },
  block: { type: String },
  jobVacancies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'jobVacancies'
  }],
  CV: { type: String },
  dateJoined: { type: Date },
  domisili: { type: String },
  profilePhoto: { type: String },
  resume: { type: String },
  salary: { type: Number },

  education: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'educationUser'
  }],
  isPremium: { type: Boolean, default: false },
  organization: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'organizationUser'
  }],
  experience: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experienceUser'
  }],
  skill: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skillUser'
  }],

  marriedStatus: { type: Boolean },
  agama: { type: String },
  email: { type: String, required: true },
  jenisKelamin: { type: String },
  noHP: { type: String },
  wargaNegara: { type: String },
  bio: { type: String },
  refrensi: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'refrensiUser'
  }],
  refrensi: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'certificateUser'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);