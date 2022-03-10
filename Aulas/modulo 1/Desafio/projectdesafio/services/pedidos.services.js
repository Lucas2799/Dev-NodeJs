import PedidosRepository from "../repositories/Pedidos.repository.js";
import { promises as fs } from "fs";
const { readFile } = fs;

async function AllPedidos() {
    return await PedidosRepository.AllPedidos();
}

export default{
    AllPedidos
}