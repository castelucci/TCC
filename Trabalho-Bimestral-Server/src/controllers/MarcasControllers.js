const { Schema, model } = require("mongoose");
const Marca = model("Marcas", new Schema({ marcas: [[]] }, /*{ versionKey: false },*/ { timestamps: true }));

module.exports = {
  async store(itens) {
    let m = []
    Object.keys(itens).forEach(e => {
      m.push([])
      itens[e].variedade.forEach((e2) => {
        m[e].push(e2.marca)
      });
    });
    let marcas = await Marca.findOne()
    if (!marcas) { Marca.create({marcas:m}); return }
    marcas= marcas.marcas
    let atualiza = false;
    marcas.forEach((e, i) => { m[i].forEach(mm => { if (e.indexOf(mm) < 0) { marcas[i][marcas[i].length] = mm; atualiza = true } }) })
    if (atualiza) await Marca.updateOne({marcas})
  },
  async listMarcas(req,res) {    
    let resp = await Marca.findOne()
    let status;
    (resp) ? status = 200 :  status = 404
    res.status(status).send(resp)
  },
};