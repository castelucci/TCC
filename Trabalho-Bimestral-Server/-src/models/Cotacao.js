const { Schema, model } = require("mongoose");

const CotacoesSchema = new Schema({
  status: { type: Boolean, default: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cesta:{
    alimentos:[
      {
      nome: {
        type: String,
        require: true,
        match: [/^[A-zÀ-ú :/()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
      },
      variedade: [
        {
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
          valor:{
            type: Number,
            match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
            require: true
          },
          unidade:{
            type: String,
            require: true,
            match: [/^[A-z]+$/, 'A unidade de grandeza do alimento, referênte a cesta básica, só pode conter números'],
          }
        }, _id: false
      }
    ],      
      valorMax: {
        type: Number,
        match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
      },
      valorMin: {
        type: Number,
        match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
      },
      valorMedio: {
        type: Number,
        match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
      }, _id: false
    }],
    valorTotal: {
      type: Number,
      match: [/^[0-9]+$/, 'O valor total dos produtos, referêntes a cesta básica, só pode conter números'],
    },
  },
  /*mes: {
    type: String,
    required: [true, "O mês de referência da cesta básica é uma informação obrigatoria"],
    enum: {
      values: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      message: 'O mês de referência da cesta básica é invalido'
    },
  },
  ano: {
    type: Number,
    required: [true, "O ano de referência da cesta básica é uma informação obrigatoria"],
  },*/
  data: Date
}, /*{ versionKey: false },*/ { timestamps: true });

function construtor(cesta) {
  this.cA=cesta.alimentos;
  cesta.valorTotal = 0
  alimentos=["Carne","Leite","Feijão","Arroz","Farinha","Batata","Tomate","Pão: francês ou de fôrma","Café em Pó","Frutas: Banana","Açúcar","Óleo ou Banha","Manteiga"];
  Object.keys(cA).forEach(e => {
   cA[e].nome=alimentos[e];
    let valor = []
    cA[e].valorMedio = 0; let falso = 0
    cA[e].variedade.forEach(e2 => {
      valor.push(e2.preco)
      cA[e].valorMedio += e2.preco
      if (!e2.preco) { falso++ }
    });
    cesta.valorTotal += cA[e].valorMedio
    cA[e].valorMedio = cA[e].valorMedio / ((cA[e].variedade).length - falso)
    cA[e].valorMax = Math.max(...valor)
    cA[e].valorMin = Math.min(...valor)
  });
  return cesta
}
CotacoesSchema.pre('save', function (next) {
  this.cesta = construtor(this.cesta)
  next();
})
CotacoesSchema.pre('updateOne', function (next) {
  this._update.cesta = construtor(this._update.cesta)
  this.options.runValidators = true;
  next();
});
module.exports = model("Cotacoes", CotacoesSchema);
