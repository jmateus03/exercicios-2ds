const express = require("express")
const router = express.Router()
const validarProjetos = require("./../middlewares/validarProjetos")

const projetos = [
    { id: 1, cliente: "Ana", movel: "Banco", valor: 180, situacao: "entregue" },
    { id: 2, cliente: "Bruno", movel: "Estante", valor: 450, situacao: "producao" },
    { id: 3, cliente: "Carla", movel: "Mesa", valor: 700, situacao: "producao" }
]

router.get("/projetos", (req, res) =>{
    const situacao = req.query.situacao
    const valorMin = Number(req.query.valorMin)

    if(situacao && valorMin){
        return res.json(projetos.filter(p => p.situacao === situacao && p.valor >= valorMin))
    }
    if(valorMin){
        return res.json(projetos.filter(p => p.valor === valorMin))
    }
    if(situacao){
        return res.json(projetos.filter(p => p.situacao === situacao))
    }

    res.json(projetos)
})

router.get("/projetos/resumo", (req, res) =>{
    res.json(
        {
            "total": projetos.length,
            "valorTotal": projetos.reduce((somatorio , projeto) => {
                return somatorio + projeto.valor
        }, 0)
})
})

router.get("/projetos/:id", (req , res, next) => {
    const id = Number(req.params.id)
    const projetoId = projetos.find(p => p.id === id)

    if(!projetoId){
        res.status(404).json({ erro: "Projeto nao encontrado"})
    }

    res.json(projetoId)
})

router.post("/projetos", validarProjetos, (req, res) =>{
    const tamanho = projetos.length
    const novoProjeto = req.body

    novoProjeto.id = tamanho + 1
    novoProjeto.situacao = "orcado"

    projetos.push(novoProjeto)

    res.status(201).json({"mensagem": "Registro de projeto criado"})
})



module.exports = router