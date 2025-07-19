const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const skillUserSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    idSkill: { type: ObjectId, required: false },
    tingkat: { type: String, required: true }
}, {
    timestamps: true
});


module.exports = mongoose.model('skillUser', skillUserSchema);