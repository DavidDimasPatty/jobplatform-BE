const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const jobVacanciesSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    namaPosisi: { type: String, required: true },

}, {
    timestamps: true
});



module.exports = new mongoose.model('jobVacancies', jobVacanciesSchema);