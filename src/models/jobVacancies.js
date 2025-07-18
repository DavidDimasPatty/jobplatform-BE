const mongoose = require('mogoose');
const { Schema, Types } = mongoose;

const jobVacanciesSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    namaPosisi: { type: String, required: true },

}, {
    timestamps: true
});



module.exports = new mongoose.model('jobVacancies', jobVacanciesSchema);