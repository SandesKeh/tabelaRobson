import { inserirFavorito, consultarFavorito, alterarFavorito} from "../repository/favoritoRepository.js";
import { Router } from "express";

const endpoint = Router();


endpoint.post('/inserir/favorito', async (req,resp) => {
    let favobj = req.body;

    let id = await inserirFavorito(favobj);

    resp.send({
        id: id
    })

})

endpoint.get('/consultar/favorito', async (req,resp) => {
    let id = await consultarFavorito()

    resp.send(
        id
    )
})

endpoint.put('/alterar/favorito/:id', async (req,resp) => {
    let id = req.params.id;
    let favobj = req.body;

    let res = await alterarFavorito(favobj, id)

    resp.send()
})
export default endpoint;