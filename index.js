const express = require("express");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fatec",
  database: "teste"
});

app.get("/user", (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.query.id;
  db.query(query, (err, result) => {
    if (err) {
      console.error("ERRO SQL:", err.message);
      return res.status(500).send("Erro no SQL: " + err.message);
    }
    res.send(result);
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log("API vulnerável rodando em http://192.168.15.13:3000");
});
