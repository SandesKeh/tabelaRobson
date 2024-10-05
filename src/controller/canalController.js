import { salvarCanal, consultarCanal, alterarCanal, deletarCanal } from "../repository/canalRepository.js";
import { Router } from "express";

const endpoint = Router();
endpoint.post ('/inserir', async (req, resp) => {
    let canalobj = req.body;

    let id = await salvarCanal(canalobj)

    resp.send({
        id: id
    })
})

endpoint.get ('/consultar', async (req, resp) => {
    let id = await consultarCanal ()
    resp.send (id)
})


endpoint.put ('/alterar/:id', async (req, resp) => {
    let id = req.params.id
    let canalobj = req.body;

    let registro = await alterarCanal (canalobj, id);
    resp.send () 
})


endpoint.delete ('/deletar/:id', async (req, resp) => {
    let id = req.params.id

    let registro = await deletarCanal(id)
    resp.send ()
})


export default endpoint;