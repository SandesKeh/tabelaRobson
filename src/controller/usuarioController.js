import { salvarUsuario, consultarUsuario, alterarUsuario, deletarUsuario } from "../repository/usuarioRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post ('/inserir/usuario', async (req,resp) => {
    let nome = req.body.nome;

    let id = await salvarUsuario(nome) 

    resp.send ({
        id: id
    })
})

endpoint.get('/consultar/usuario', async (req,resp) => {
    let id = await consultarUsuario()
    resp.send(id)
})

endpoint.put('/alterar/usuario/:id', async (req,resp) => {
    let id = req.params.id

    let nomeobj= req.body;

    let res = await alterarUsuario (nomeobj, id);

    resp.send()
})

endpoint.delete('/deletar/usuario/:id', async (req,resp) => {
    let id = req.params.id;

    let res = await deletarUsuario(id)

    resp.send()
}) 
export default endpoint;