const { Schema, model } = require("mongoose");

function criaModel(alimento, comercio, data) {
  return model(alimento + "." + comercio + "." + data, new Schema({
    marca: {
      type: String,
      require: true,
      match: [/^[A-zÀ-ú /()]+$/, 'A marca do alimento, referênte a cesta básica, só pode conter letras'],
    },
    preco: {
      type: Number,
      match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
    },
    quantidade: {
      valor: {
        type: Number,
        match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
        require: true
      },
      unidade: {
        type: String,
        require: true,
        match: [/^[A-z]+$/, 'A unidade de grandeza do alimento, referênte a cesta básica, só pode conter números'],
      }
    }
  }, { timestamps: true }))
}

module.exports = {
  async store(req, res, next) {
    let json = req.body; let resultado = []; let promises; let model
    try {
      Object.keys(json).map(async (alimento) => {
        model = criaModel(alimento, req.params.c, req.params.d)
        promises = json[alimento].variedade.map(async (item) => {
          await model.updateOne({ marca: item.marca }, item, { upsert: true })
        })
      }); await Promise.all(promises);
      res.status(201).send()
    } catch (error) { res.status(404).send(resultado) }///mud
  },
  async listMarcas(req, res) {
    let resp = await Marca.findOne()
    let status;
    (resp) ? status = 200 : status = 404
    res.status(status).send(resp)
  },
};
