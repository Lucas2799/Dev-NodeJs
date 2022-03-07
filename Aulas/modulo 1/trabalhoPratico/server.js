import fs from "fs"
var i = 0;
//metodo de leitura de arquivo
fs.readFile("./car-list.json",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(JSON.parse(data));
    }
    
});
