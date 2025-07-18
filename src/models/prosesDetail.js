const mongoose = require('mogoose');
const { Schema, Types } = mongoose;

const prosesDetailSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    namaProses: { type: String, required: true },
    deskripsiProses: { type: String, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('prosesDetail', prosesDetailSchema);