import fs from "fs";//import modulo

fs.writeFile("teste.txt", "tete", function(err){//criação de arquivo com nome e conteudo
    if (err){
        console.log(err);//retorno caso erro
    }else{
        fs.appendFile("teste.txt", "\n teste apend file1", function (err){ //concatenação de escrita 
            if(err){
                console.log(err);
            }else{
                fs.readFile("teste.txt", "utf-8", function(err, data){//leitura e formatação de arquivo
                    if (err){
                       console.log(err);
                    }else{
                       console.log(data);//imprimindo conteudo do arquivo
                    }
                   });  
            }
        });

       
    }
});