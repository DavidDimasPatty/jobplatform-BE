const mongoose = require('mogoose');
const { Schema, Types } = mongoose;

const referensiUserSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    idUser: { type: Types.ObjectID, required: false },
    namaReferensi: { type: String, required: true },
    noTelp: { type: String, required: true },
    hubungan: { type: String, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('referensiUser', referensiUserSchema);