const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
  _id: { type: ObjectId },
  nama: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  tanggalLahir: { type: Date, required: true },
  tempatLahir: { type: String },
  statusJob: { type: Boolean, default: false },
  block: { type: String },
  jobVacancies: [{
    type: ObjectId,
    ref: 'jobVacancies'
  }],
  CV: { type: String },
  dateJoined: { type: Date },
  domisili: { type: String },
  profilePhoto: { type: String },
  resume: { type: String },
  salary: { type: Number },

  education: [{
    type: ObjectId,
    ref: 'educationUser'
  }],
  isPremium: { type: Boolean, default: false },
  organization: [{
    type: ObjectId,
    ref: 'organizationUser'
  }],
  experience: [{
    type: ObjectId,
    ref: 'experienceUser'
  }],
  skill: [{
    type: ObjectId,
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
    type: ObjectId,
    ref: 'refrensiUser'
  }],
  certificate: [{
    type: ObjectId,
    ref: 'certificateUser'
  }]
}, {
  timestamps: true,
  collection: 'user'
});

module.exports = mongoose.model('user', userSchema);