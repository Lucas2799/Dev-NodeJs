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

//Parametro next
app.get("/mutiplehandlers",(req, res, next)=>{
    console.log("Callback 1");
    next();
},(req,res)=>{
    console.log("Callback 2");
    res.end();//function end encerra o processamento de callback
});

const callback1 =(req, res, next)=>{
    console.log("callback 1")
    next();
};

function callback2 (req,res,next){
    console.log("callback 2")
    next();
};

const callback3 = (req,res)=>{
    console.log("callback 3")
    res.end();
};

app.get("/testemutiplehandlersarray",[callback1,callback2,callback3]);

//tratamento de erro na porta de entrarda
app.get("/",(req, res)=>{
    throw new Error("Erro, mensagem de teste!");
});

//tratamento de erro na porta de entrarda
app.use((err,req,res,next)=>{
    console.log("Error 1" );
    res.status(500).send("Ocorreu um erro ")
})

app.listen(3000,()=>
console.log("API Started") );