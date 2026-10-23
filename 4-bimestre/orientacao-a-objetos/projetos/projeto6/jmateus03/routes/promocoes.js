const express = require("express")
const router =  express.Router()

const promocoes = [
    { id: 1, nome: "Lavagem Simples", desconto: 10 },
    { id: 2, nome: "Lavagem a Seco", desconto: 20 }
]

router.get("/", (req, res) =>{
    res.json(promocoes)
})

router.get("/total", (req, res) =>{
    res.json({ "total": promocoes.length })
})

module.exports = router