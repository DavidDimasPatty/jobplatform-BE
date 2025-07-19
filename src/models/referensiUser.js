const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const referensiUserSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    idUser: { type: ObjectId, required: false },
    namaReferensi: { type: String, required: true },
    noTelp: { type: String, required: true },
    hubungan: { type: String, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('referensiUser', referensiUserSchema);