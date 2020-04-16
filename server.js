const express = require("express");
const cors = require("cors");
const nunjucks = require("nunjucks");
// const routes = require("./routes");

const app = express();

// configurar (onde vão ficar) arquivos estáticos (css, scripts, imagens)
app.use(express.static("backup"));

app.use(cors());
app.use(express.json());

// configurar o nunjucks
nunjucks.configure("views", {
  express: app,
});

app.get("/", (req, res) => {
  return res.render("index.html");
});

app.get("/ideias", (req, res) => {
  return res.render("ideias.html");
});

app.listen(3333);
