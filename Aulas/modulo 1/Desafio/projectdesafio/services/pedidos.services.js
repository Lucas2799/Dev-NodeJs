import PedidosRepository from "../repositories/pedidos.repository.js";
import { promises as fs } from "fs";
const { readFile } = fs;

async function AllPedidos() {
    return await PedidosRepository.AllPedidos();
}

async function GetById(){
    return await PedidosRepository.GetById();
}

export default{
    AllPedidos,
    GetById
}