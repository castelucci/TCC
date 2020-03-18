const { Schema, model } = require("mongoose");

const CestasSchema = new Schema({
    cesta: Schema.Types.Mixed,
    data: Date,
    valorTotal:Number,
}, /*{ versionKey: false },*/ { timestamps: true });

CestasSchema.pre('save', async function (next) {
  this.data = this._doc.cesta.data
  this.valorTotal = this._doc.cesta.cesta.valorTotal
  next();
})
module.exports = model("Cestas", CestasSchema);
