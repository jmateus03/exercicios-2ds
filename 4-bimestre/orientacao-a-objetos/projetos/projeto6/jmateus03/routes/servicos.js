const express = require("express")
const router = express.Router()

const lavagens = [
    { id: 1, nome: "Lavagem Simples", tipo: "agua", preco: 25, disponivel: true },
    { id: 2, nome: "Lavagem a Seco", tipo: "seco", preco: 45, disponivel: true },
    { id: 3, nome: "Passadoria", tipo: "vapor", preco: 15, disponivel: false }
]



router.get("/", (req, res) =>{
    res.json(lavagens)
})

router.get("/disponiveis", (req, res) => {
    res.json(lavagens.filter(lavagens => lavagens.disponivel))
})

router.get("/total", (req, res) =>{
    res.json({ "total": lavagens.length})
})

router.post("/", (req, res) => {
    res.status(201).json({ "mensagem": "Cadastro de servico realizado" })
})

module.exports = router