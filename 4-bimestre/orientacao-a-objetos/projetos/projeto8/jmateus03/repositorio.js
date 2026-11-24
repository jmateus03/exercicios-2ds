
const fs = require("fs/promises")

const arquivo = process.env.ARQUIVO_HORARIOS || "pedidos.json"

async function listar() {
    try {
        const conteudo = await fs.readFile(arquivo, "utf-8")
        return JSON.parse(conteudo)
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }
        throw erro
    }
}

async function salvar(horario) {
    const lista = await listar()

    lista.push(horario)

    await fs.writeFile(arquivo, JSON.stringify(lista, null, 2))

    return horario
}

async function atualizar(id, dados) {
    const lista = await listar()

    const i = lista.findIndex(c => c.id == id)

    if (i === -1) {
        return null
    }

    lista[i] = { ...lista[i], ...dados }

    await fs.writeFile(arquivo, JSON.stringify(lista, null, 2))

    return lista[i]
}

async function remover(id) {
    const lista = await listar()

    const i = lista.findIndex(c => c.id == id)

    if (i === -1) {
        return false
    }

    const resto = lista.filter(c => c.id != id)

    await fs.writeFile(arquivo, JSON.stringify(resto, null, 2))

    return true
}

async function contar() {
    const lista = await listar()

    return lista.length
}

module.exports = { listar, salvar, atualizar, remover, contar }
