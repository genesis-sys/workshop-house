const db = require("../../db");
const { handle_ideas } = require("../utils/functions");

module.exports = {
  async index(req, res) {
    await db.all(`SELECT * FROM ideas`, function (err, rows) {
      if (err) {
        console.log(err);

        return res.send("Erro em receber os dados!");
      }

      const lastIdeas = handle_ideas(rows);

      return res.render("ideias.html", { ideas: lastIdeas });
    });
  },

  async store(req, res) {
    const { title, description, url } = req.body;
  },

  async show(req, res) {
    await db.all(`SELECT * FROM ideas;`, function (err, rows) {
      if (err) return console.log(err);

      const lastIdeas = handle_ideas(rows, 2);

      return res.render("index.html", { ideas: lastIdeas });
    });
  },

  async handle(req, res) {
    const { image, title, category, description, link } = req.body;

    const query = `
      INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
      ) VALUES (?,?,?,?,?);
    `;
    const values = [image, title, category, description, link];

    await db.run(query, values, function (err) {
      if (err) {
        console.log(err);

        return res.send("Erro em postar os dados!");
      }

      return res.redirect("/ideias");
    });
  },

  async destroy(req, res) {
    const { id } = req.body;

    const query = `DELETE FROM ideas WHERE id = ?`;

    try {
      await db.run(query, [id], function (err) {
        if (err) {
          console.log(err);

          return res.send("Erro em Apagar os dados!");
        }

        return res.redirect("/ideias");
      });
    } catch (error) {
      console.log("Erro ao deletar idea.");
    }
  },

  async delete(req, res) {
    const { id } = req.query;

    await db.all(`SELECT * FROM ideas WHERE id = ?;`, [id], function (
      err,
      rows
    ) {
      return res.render("delete.html", { ideas: rows });
    });
  },
};
