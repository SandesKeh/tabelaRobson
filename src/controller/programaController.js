import { salvarPrograma, consultarPrograma, alterarPrograma, deletarPrograma } from "../repository/programaRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post ('/inserir/programa', async (req, resp) => {
    let programaobj = req.body;

    let id = await salvarPrograma(programaobj)

    resp.send({
        id: id
    })

})

endpoint.get ('/consultar/programa', async (req,resp) => {
    let id = await consultarPrograma()

    resp.send(
        id
    )
})

endpoint.put('/alterar/programa/:id', async (req,resp) => {
    let id = req.params.id;

    let programaobj= req.body;

    let i = await alterarPrograma(programaobj, id) 

    resp.send(
        
    )

})

endpoint.delete('/deletar/programa/:id', async (req, resp) => {
    let id = req.params.id;

    let res = await deletarPrograma(id)

    resp.send()


})


export default endpoint;


