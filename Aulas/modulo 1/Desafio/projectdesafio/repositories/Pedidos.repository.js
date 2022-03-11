import { promises as fs } from "fs";
const { readFile } = fs;

//Retorna todos os objetos
async function AllPedidos() {
    const data = JSON.parse(await readFile(fileName));
    return data;
}

//retornos de pedidos por id
async function GetById(id){
    const data = await AllPedidos();
    //let id = [];
    console.log(id);

    

    for (let i = 0; i < data.length; i++) {
        if (data[i] != null){
            id.push({
                "id": data[i]
            });
        }
    }
    return data;
}

export default{
    AllPedidos,
    GetById
}