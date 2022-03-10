import { promises as fs } from "fs";
const { readFile } = fs;

async function AllPedidos() {
    const data = JSON.parse(await readFile(fileName));
    return data;
}

export default{
    AllPedidos
}