const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const companyProsesSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: false },
    idCompany: { type: Types.ObjectId, required: true, ref: 'company' },
    namaProses: { type: String, required: true },
    idDetail: [{ type: Types.ObjectId, ref: 'prosesDetail' }]
}, {
    timestamps: true
});


module.exports = mongoose.model('companyProses', companyProsesSchema);