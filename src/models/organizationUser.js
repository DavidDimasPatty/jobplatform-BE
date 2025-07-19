const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const organizationUserSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    namaTempat: { type: String, required: true },
    jabatan: { type: String, required: true },
    posisi: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    deksripsi: { type: String, required: true },
    current: { type: Boolean, required: true }
},
{
    timestamps:true
});


module.exports = mongoose.model('organizationUser', organizationUserSchema)