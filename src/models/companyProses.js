const mongoose = require('mogoose');
const { Schema, Types } = mongoose;


const companyProsesSchema = new mongoose.Schema({
    _id: { type: Types.ObjectID, required: false },
    idCompany: { type: Types.ObjectId, required: true, ref: 'company' },
    namaProses: { type: String, required: true },
    idDetail: [{ type: Types.ObjectId, ref: 'prosesDetail' }]
}, {
    timestamps: true
});


module.exports = mongoose.model('companyProses', companyProsesSchema);