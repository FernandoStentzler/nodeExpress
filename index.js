const express = require("express")

const bodyParser = require("body-parser")

const jsonParse = bodyParser.json()

const server = express()

const usuarios = [{
    id: 1,
    nome: "Fernando ",
    sobrenome: "Stentzler",
    idade: 27,    
},{
    id: 2,
    nome: "Jessica",
    sobrenome: "Santos",
    idade: 27
}]

server.get("/usuarios", (req, res) => {
    res.send(usuarios)
})


server.get("/usuarios/:id", (req, res) => {
    const {id} = req.params

    const aux = usuarios.find((usuario) => usuario.id == id)

    res.send(aux)
})

server.post("/usuarios", jsonParse, (req, res) => {
    const novoUsuario = req.body
    usuarios.push(novoUsuario)
    res.send(usuarios)
})

server.delete("/usuarios/:index", (req, res) => {
    const {index} = req.params
    usuarios.splice(index, 1)
    res.send(usuarios)

})

server.put("/usuarios/:index", jsonParse, (req, res) => {
    const {index} = req.params
    const uptade = req.body
    usuarios.find((usuario) => usuario == index){
        return usuarios.nome
    }
    res.send(usuarios)

})

console.log("O servidor está rodando na porta 3000")

server.listen(3000, "localhost")