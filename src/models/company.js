const mongoose= require('mongoose');
const { Schema, Types } = mongoose;

const companySchema = new mongoose.Schema({
  _id:{type:Types.ObjectID,required:false},
  namaCompany: { type: String, required: true },
  alamatCompany: { type: String, required: true },
  notelpCompany: { type: String, required: true },
  emailCompany: { type: String, required: true },
  deskripsiCompany: { type: String },
  backgroundProfileCompany: { type: String },
  bidangCompany: { type: String },
  facebookCompany: { type: String },
  igCompany: { type: String },
  photoProfileCompany: { type: String },
  twitterCompany: { type: String },
  websiteCompany: { type: String },
  idProses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companyProses' 
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('company', companySchema);