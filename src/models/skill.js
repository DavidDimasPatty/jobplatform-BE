const mongoose = require('mogoose');
const { Schema, Types } = mongoose;

const skillSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    skillName: { type: String, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('skill', skillSchema);