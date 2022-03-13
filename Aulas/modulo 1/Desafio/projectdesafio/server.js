import express from "express";
import PedidosRouter from "./routes/pedidos.routes.js";
import { promises as fs } from "fs";

const app = express();
const { readFile, writeFile } = fs;
app.use("/pedidos", PedidosRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

global.fileName = "pedidos.json"

app.listen(8080, async ()=> {
    try{
        await readFile (fileName);
        console.log("server online na porta : 8080");
    }catch(err){
        console.log(err);
    }
    
});