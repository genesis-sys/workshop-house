const express = require("express");
const cors = require("cors");
const nunjucks = require("nunjucks");
// const routes = require("./routes");

const app = express();

// configurar (onde vão ficar) arquivos estáticos (css, scripts, imagens)
app.use(express.static("backup"));

app.use(cors());
app.use(express.json());

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios",
    category: "Saúde",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullatempora nisi consectetur distinctio est iste eaque dicta eius.Illum tempore dolorem amet repudiandae porro, rem placeat odiodebitis laborum animi?",
    url: "https://rocketseat.com.br",
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Cursos de Programação",
    category: "Estudo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullatempora nisi consectetur distinctio est iste eaque dicta eius.Illum tempore dolorem amet repudiandae porro, rem placeat odiodebitis laborum animi?",
    url: "https://rocketseat.com.br",
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Mentalidade",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullatempora nisi consectetur distinctio est iste eaque dicta eius.Illum tempore dolorem amet repudiandae porro, rem placeat odiodebitis laborum animi?",
    url: "https://rocketseat.com.br",
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
    title: "Karaokê",
    category: "Diversão em família",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullatempora nisi consectetur distinctio est iste eaque dicta eius.Illum tempore dolorem amet repudiandae porro, rem placeat odiodebitis laborum animi?",
    url: "https://rocketseat.com.br",
  },
];

// configurar o nunjucks
nunjucks.configure("views", {
  express: app,
  noCache: true,
});

app.get("/", (req, res) => {
  const lastIdeas = [];

  for (let idea of ideas) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea);
    }
  }

  return res.render("index.html", { ideas: lastIdeas });
});

app.get("/ideias", (req, res) => {
  return res.render("ideias.html");
});

app.listen(3333);
