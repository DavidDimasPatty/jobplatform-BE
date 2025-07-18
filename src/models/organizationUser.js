const mongoose = require('mogoose');
const { Schema, Types } = mongoose


const organizationUserSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
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