const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const prosesDetailSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    namaProses: { type: String, required: true },
    deskripsiProses: { type: String, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('prosesDetail', prosesDetailSchema);