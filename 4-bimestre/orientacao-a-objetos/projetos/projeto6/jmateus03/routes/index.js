
const express = require("express")
const router = express.Router()

const servicosRouter = require("./servicos")
const clienteRouter = require("./clientes")
const promocoesRouter = require("./promocoes")

router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Lavanderia"
    })
})

router.use("/servicos", servicosRouter)
router.use("/clientes", clienteRouter)
router.use("/promocoes", promocoesRouter)

module.exports = router
