import express from "express";

//criando uma instacia do express
const app = express();

//iniciando o server
app.listen(3000,( )=>{
    console.log("start server sucesso");
});

//criando a rota com retorno metodo get
app.get("/", (req , res) =>{
    res.send("hello World");
});

//criando a rota com retorno metodo post
app.post("/", (req,res)=>{
    const a = 3;
    const b = 5;
    const resultado = a + b;
    res.send("Resultado :"+ resultado);
});