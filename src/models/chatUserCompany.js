const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const chatUserCompanySchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: true },
    idUser: { type: ObjectID, required: true },
    idCompany: { type: ObjectID, required: true },
    chat: { type: String, required: true },
    read: { type: Boolean, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('chatUserCompany', chatUserCompanySchema);