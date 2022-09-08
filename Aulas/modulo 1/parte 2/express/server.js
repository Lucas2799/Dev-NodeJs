import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("Olá Mundo!"); 
});

//Ao usar a interrogação em rota a mesma responderá com ou sem a ultima letra da rota 
app.get("/teste?",(req,res)=>{
    res.send("Teste pontuação em rota ")
})

app.listen(3000,()=>
console.log("API Started") );