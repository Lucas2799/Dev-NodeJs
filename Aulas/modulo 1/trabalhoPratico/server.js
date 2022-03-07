import fs from "fs"

//metodo de leitura de arquivo
fs.readFile("./car-list.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

