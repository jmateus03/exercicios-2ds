const express = require("express")
const router =  express.Router()

const visitantes = [
    { id: 1, nome: "Ana", contato: "9999-1818" },
    { id: 2, nome: "Bruno", contato: "9999-1919" }
]

router.get("/" ,(req, res) =>{
    res.json(visitantes)
})

router.get("/total", (req ,res) =>{
    res.json({ "total": visitantes.length })
})

module.exports = router