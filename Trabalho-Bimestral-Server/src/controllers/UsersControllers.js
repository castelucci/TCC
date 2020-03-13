const User = require("../models/User");
const jwt = require('jsonwebtoken')

function token(params) { return jwt.sign({ params }, "hakuna matata", { expiresIn: 90000000000 }) }

module.exports = {
  async store(req, res) {
    try {
        if (await User.findOne({ email: req.body.email }, '_id')) {
          return res.status(406).send({ erro: "Email já cadastrado" })
        } await User.create(req.body);
        return res.status(201).send();
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
  async aut(req, res) {
    if (!await User.findOne({ email: "root@root.root" })) {//<-- apenas para o desenvolvimento
      await User.create({ "email": "root@root.root", "nome": "root", "senha": "root", "adm": true })//<-- apenas para o desenvolvimento
    }//<-- apenas para o desenvolvimento
    let { email, senha } = req.body;
    let user = await User.findOne({ email }).select('+senha')
    if (!user) return res.status(404).send({ error: "Email não cadastrado" })
    if (!senha || ! await user.compareSenha(senha)) {
      res.status(406).send({ error: "Senha incorreta" })
    }
    if (!user.status) {res.status(406).send({ error: "Usuario sem autorização de login"})} 
    ({ senha,adm,status, ...user } = user._doc);
    return res.status(201).send({ user, token: token({user})});
  },
  async nivelDeAutorizacao(req, res) {return res.status(200).send(req.userAdm)},
  async email(req, res) { return res.json(await User.findOne({ email: req.params.email })) }
};

