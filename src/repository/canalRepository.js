
import con from "./connection.js";


export async function salvarCanal(canalobj) { 
    let comando = `
            insert into tb_canal(nm_canal, nr_canal, bt_aberto)
                values (?,?,?) `

    let resposta = await con.query(comando, [canalobj.canal, canalobj.numero, canalobj.aberto]);

    let id = resposta[0];

    return id.insertId;
                
}

export async function consultarCanal(){
    let comando = `select * from tb_canal;`

    let resposta = await con.query(comando)
    let id = resposta [0];
    
    return id;
}


export async function alterarCanal (canalobj, id){
    let comando = `
    update tb_canal 
    set nm_canal = ?,
    nr_canal = ?,
    bt_aberto = ?
    where id_canal = ?;
    `
    let resposta = await con.query(comando, [canalobj.canal, canalobj.numero, canalobj.aberto, id])
    let resp = resposta[0]

    return resp.affectedRows;
}


export async function deletarCanal (id){
    let comando = `delete from tb_canal where id_canal = ? `

    let resposta = await con.query (comando, [id])
    let resp = resposta[0]

    return resp.affectedRows
}


