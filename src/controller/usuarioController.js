import { salvarUsuario } from "../repository/usuarioRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post ('/inserir/usuario', async (req,resp) => {
    let nome = req.body.nome;

    let id = await salvarUsuario(nome) 

    resp.send ({
        id: id
    })
})

export default endpoint;