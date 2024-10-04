import con from "./connection.js";

export async function inserirFavorito(fav){
    let comando = `
            insert into tb_programa_favorito (vl_avaliacao, id_usuario, id_canal_programa)
        values (?,?,?)
    `
    let resposta = await con.query (comando, [fav.avaliacao, fav.usuario, fav.programa])

    let id = resposta [0]

    return id.insertId
}