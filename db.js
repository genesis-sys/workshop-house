const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./ws.db");

db.serialize(() => {
  // Criar tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `);

  // Inserir dados na tabela
  const query = `
    INSERT INTO ideas(
      image,
      title,
      category,
      description,
      link
    ) VALUES (?,?,?,?,?);
  `;
  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729038.svg",
    "Pintar",
    "Criatividade",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullatempora nisi consectetur distinctio est iste eaque dicta eius.Illum tempore dolorem amet repudiandae porro, rem placeat odiodebitis laborum animi?",
    "https://rocketseat.com.br",
  ];
  // db.run(query, values, function (err) {
  //   if (err) return console.log(err);

  //   console.log(this);
  // });

  // Deletar um dado da tabela
  // db.run(`DELETE FROM ideas WHERE id = ?`, [2], function (err) {
  //   if (err) return console.log(err);

  //   console.log("Deletado", this);
  // });

  // Consultar dados na tabel
  // db.all(`SELECT * FROM ideas;`, function (err, rows) {
  //   if (err) return console.log(err);

  //   console.log(rows);
  // });
});

module.exports = db;

// callback: funnções dentro de outras funções (args) que executam em certos momentos
