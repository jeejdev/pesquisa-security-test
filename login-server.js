// login-server.js
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))

const USER = "admin"
const PASS = "131" // senha correta

app.get("/", (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form method="POST" action="/login">
      <input type="text" name="usuario" placeholder="Usuário" /><br />
      <input type="password" name="senha" placeholder="Senha" /><br />
      <button type="submit">Entrar</button>
    </form>
  `)
})

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body

  if (!usuario || !senha) {
    return res.status(401).send("Campos obrigatórios ausentes")
  }

  if (usuario === USER && senha === PASS) {
    res.send("Login bem-sucedido! 🎉")
  } else {
    res.status(401).send("Credenciais inválidas")
  }
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
