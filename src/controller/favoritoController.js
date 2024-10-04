import { inserirFavorito } from "../repository/favoritoRepository.js";
import { Router } from "express";

const endpoint = Router();


endpoint.post('/inserir/favorito', async (req,resp) => {
    let fav = req.body;

    let id = await inserirFavorito(fav);

    resp.send({
        id: id
    })

})

export default endpoint;