const express = require("express");
require("./db");
const cors = require("cors");
const nunjucks = require("nunjucks");
const routes = require("./src/routes");

const app = express();

app.use(cors());
app.use(express.json());

// configurar (onde vão ficar) arquivos estáticos (css, scripts, imagens)
app.use(express.static("backup"));
// habilitar uso do req.body
app.use(express.urlencoded({ extended: true }));

// configurar o nunjucks
nunjucks.configure("views", {
  express: app,
  noCache: true,
});

app.use(routes);

app.listen(3333);
