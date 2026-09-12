import {conexao} from '../conexao.js'


async function buscarTabelas(){
  console.log('DAO de tbl_paciente')
    const sql = `CALL printarTabelas();`
    
    const conn = await conexao()
    try {
       
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

async function buscarTabela(codigo){
    const sql = `CALL printarTabelas() WHERE codigo = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export {buscarTabelas, buscarTabela}