const mongoose = require('mogoose');
const { Schema, Types } = mongoose;

const certificateUserSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    namaSertifikat: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('certificateUser', certificateUserSchema);