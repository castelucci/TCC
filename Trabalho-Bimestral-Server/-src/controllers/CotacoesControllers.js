const Cotacao = require("../models/Cotacao");
const { store } = require("../controllers/MarcasControllers")
const Cesta = require("../controllers/CestaControllers");

module.exports = {
  async store(req, res) {
    try {
      let cotacao = await Cotacao.create(req.body)
      store(cotacao.cesta.alimentos);
      Cesta.uptade(cotacao)
      return res.status(201).send();
      //return res.send(await Cotacao.findOne({ _id: cotacao._id }, "-status").populate('user', 'nome -_id'))
    } catch (erro) {
      return res.status(406).json(erro.message);
      
    }
  },
  async update(req, res) {
    try { 
      let cotacao = await Cotacao.findOne({_id:req.params.id})
      if (!cotacao) {return res.status(404).send({Erro: "Cotação não encontrada"}) } 
      Cesta.uptade(cotacao)  
      return res.status(201).send(await Cotacao.updateOne({_id:req.params.id},req.body))
    } catch (error) { return res.status(404).send({Erro: error.message}); }
  },
  async destroy(req, res) {  
    try {
      let cotacao = await Cotacao.findOne({_id:req.params.id,status: true})
      if (!cotacao) {return res.status(404).send({Erro: "Cotação não encontrada"}) }
      cotacao.status=false;
      let a  = await Cotacao.updateOne({ _id: req.params.id },cotacao)      
      Cesta.destroy(cotacao) 
      return res.status(200).send(a)
    } catch (error) { return res.status(404).send({Erro: error.message}) }
  },

};