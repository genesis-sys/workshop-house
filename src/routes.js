const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  // return res.sendFile("../backup/index.html");
  console.log("Root page!");
});

routes.get("/ideas", (req, res) => {
  return res.json({ hande_shake: "salute" });
});

routes.post("/ideas", (req, res) => {
  const { message, id, to } = req.body;

  return res.json({ message, id, to });
});

module.exports = routes;
