const express = require("express");
const auth = require("./auth");

const routes = express.Router();
const UsersController = require("./controllers/UsersControllers");
const CotacoesController = require("./controllers/CotacoesControllers")
const { listCestas } = require("./controllers/CestaControllers")
const { listMarcas } = require("./controllers/MarcasControllers")


routes.post("/aut", UsersController.aut);
routes.use(auth);
routes.get("/cestas", listCestas);
routes.get("/marcas", listMarcas);
routes.get("/user/:email", UsersController.email);
routes.get("/autenticacao", UsersController.nivelDeAutorizacao);
routes.put("/cotacao/:id", CotacoesController.update);
routes.post("/cotacao", CotacoesController.store);
routes.delete("/cotacao/:id", CotacoesController.destroy);
routes.use(function isADM(req, res, next) {
  if (req.userAdm) { return next() }
  return res.status(403).send({ Erro: "Usuario sem autorização" })
});
routes.post("/user", UsersController.store);
/*routes.use(function (req, res) {
  res.status(404).send();
});*/
module.exports = routes;