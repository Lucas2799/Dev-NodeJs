import fs from "fs";

fs.writeFile("teste.txt", "tete", function(err){
    if (err){
        console.log(err);
    }else{
        fs.readFile("teste.txt", "utf-8", function(err, data){
         if (err){
            console.log(err);
         }else{
            console.log(data);
         }
        })
    }
})