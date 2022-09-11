import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("Olá Mundo!"); 
});

//Ao usar a interrogação em rota a mesma responderá com ou sem a ultima letra da rota 
app.get("/teste?",(req,res)=>{
    res.send("Teste pontuação interrogação em rota ");
});

//Ao usar o ponto de + na rota o servidor aceita a repetição de ifitos do mesmo para a resposta 
app.get("/teste+",(req,res)=>{
    res.send("Teste pontuação adição em rota ");
});

//Ao usar o pondo de * o mesmo aceitará qualquer string em seu lugar
app.get("/meu*emprego",(req,res)=>{
    res.send("Teste pontuação * em rota ");
    console.log(req.path);
});

//roteamento de parametros

//requisita um id 
app.get("/teste/:id",(req,res)=>{
    res.send(req.params.id);
});

//uso de expressão regular .*____$
app.get(/.*bonito$/, (req, res)=>{
    res.send(req.path + " | expressão regular");
});

//Parametros via Query
app.get("/oi?", (req, res)=>{
    res.send(req.query);
});

app.listen(3000,()=>
console.log("API Started") );