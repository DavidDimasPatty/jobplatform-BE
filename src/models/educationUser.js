const mongoose = require('mogoose');
const { Schema, Types } = mongoose


const educationUserSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    namaTempat: { type: String, required: true },
    tingkatan: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    deksripsi: { type: String, required: true },
    current: { type: Boolean, required: true }
}, {
    timestamps: true
});


module.exports = mongoose.model('educationUser', educationUserSchema)