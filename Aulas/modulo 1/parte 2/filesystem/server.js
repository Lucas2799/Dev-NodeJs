import fs from "fs";

fs.writeFile("teste.txt", "tete", function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Arquivo escrito com sucesso!")
    }
})