import express from "express";

//criando uma instacia do express
const app = express();

app.listen(3000,( )=>{
    console.log("start server sucesso");
})

//criando a rota com retorno
app.get("/", (req , res) =>{
    res.send("hello World");
})
