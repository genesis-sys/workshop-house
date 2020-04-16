const { Router } = require("express");

const ControllerIdeas = require("./controllers/ControllesIdeas");
// const ControllerIdeas = require("./controllers/ControllesIdeas")

const routes = Router();

// Home
routes.get("/", ControllerIdeas.show);
routes.post("/", ControllerIdeas.handle);

// ideas
routes.get("/ideias", ControllerIdeas.index);
routes.post("/ideas", ControllerIdeas.store);
//      Deletar
routes.get("/delete", ControllerIdeas.delete);
routes.post("/delete", ControllerIdeas.destroy);

module.exports = routes;
