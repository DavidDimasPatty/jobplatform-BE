const mongoose = require('mogoose');
const { Schema, Types } = mongoose;

const skillUserSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    idSkill: { type: Types.ObjectID, required: false },
    tingkat: { type: String, required: true }
}, {
    timestamps: true
});


module.exports = mongoose.model('skillUser', skillUserSchema);