const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const skillSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    skillName: { type: String, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('skill', skillSchema);