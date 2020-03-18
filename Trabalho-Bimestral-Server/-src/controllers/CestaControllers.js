const Cesta = require("../models/Cestas");
const Cotacao = require("../models/Cotacao");

module.exports = {
  async uptade(cotacao) {
    /**ver no front qual padrão da data 
    console.log(new Date(cotacao.data.getFullYear(),cotacao.data.getMonth()));
    console.log(new Date(cotacao.data.getUTCFullYear(),cotacao.data.getUTCMonth()));*/
    let cesta = await Cesta.findOne({data:new Date(cotacao.data.getUTCFullYear(),cotacao.data.getUTCMonth())})
    if (!cesta) { await Cesta.create({cesta:cotacao});return}
    if (cotacao.cesta.valorTotal <= cesta.valorTotal) {
      console.log(await Cesta.updateOne({_id:cesta._id
        /*data:new Date(cotacao.data.getUTCFullYear(),cotacao.data.getUTCMonth()),
        valorTotal:{ $gte:cotacao.cesta.valorTotal}*/},{cesta:cotacao,valorTotal:cotacao.cesta.valorTotal}))
   }
  // let op;
  //   ((await Cesta.findOne({data:new Date(cotacao.data.getUTCFullYear(),cotacao.data.getUTCMonth()),
  //     valorTotal:{ $gte:(cotacao.cesta.valorTotal-0.01)}}))) ? op=false : op=true;
  //     console.log("up");      
  //   console.log(await Cesta.updateOne({data:new Date(cotacao.data.getUTCFullYear(),cotacao.data.getUTCMonth())},
  //   {cesta:cotacao,valorTotal:cotacao.cesta.valorTotal}).setOptions({upsert: op}))
  },
  async destroy(cotacao) {  
    let cesta = await Cesta.findOne({'cesta._id':cotacao._id})
    if (!cesta) return
    let resp = await Cotacao.findOne({data:new Date(cotacao.data.getFullYear(),cotacao.data.getMonth()),status: true}).sort([['cesta.valorTotal',1],['createdAt',-1]])
    //tira o log e da erro nessa pora de resp
    console.log(resp);
    (resp) ? console.log(await Cesta.updateOne({_id:cesta._id},{cesta:resp})) : console.log( await Cesta.deleteOne({_id:cesta._id}))
  },
  async listCestas(req,res) {  
    //res.status(200).send(await Cesta.find().sort([['data',-1]]).limit(12))  //produção
    //res.status(200).send(await Cesta.find({},"cesta -_id").populate('cesta.user', 'nome -_id'))//.sort([['data',-1]]).limit(12)).populate('user', 'nome -_id') //teste
    res.status(200).send(await Cesta.find({},"cesta -_id").sort([['data',-1]]).limit(12)) //teste
    },
};