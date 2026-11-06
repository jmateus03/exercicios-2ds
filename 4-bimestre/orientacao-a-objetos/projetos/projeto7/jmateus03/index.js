const express = require("express")
const app = express()
const projetos = require("./routes/projetos")

app.use(express.json())


app.use("/", projetos)

app.use((req, res) =>{
    res.status(404).json({erro: "Rota nao encontrada"})
})

module.exports = app
