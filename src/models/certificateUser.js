const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const certificateUserSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    namaSertifikat: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('certificateUser', certificateUserSchema);