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
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, [req.query.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log("API corrigido rodando em http://192.168.15.13:3000");
});
