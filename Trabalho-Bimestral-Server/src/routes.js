const express = require("express");
const auth = require("./auth");

const routes = express.Router();
const UsersController = require("./controllers/UsersControllers");
const C = require("./controllers/CotacaoControllers")


routes.post("/aut", UsersController.aut);
routes.use(auth);
routes.get("/user/:email", UsersController.email);
routes.post("/item/:c/:d", C.store);
routes.get("/autenticacao", UsersController.nivelDeAutorizacao);
routes.use(function isADM(req, res, next) {
  if (req.userAdm) { return next() }
  return res.status(403).send({ Erro: "Usuario sem autorização" })
});
routes.post("/user", UsersController.store);
/*routes.use(function (req, res) {
  res.status(404).send();
});*/
module.exports = routes;