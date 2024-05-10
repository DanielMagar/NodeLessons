const fs = require("fs");

fs.open("./cool.txt", (err, file)=>{
    if(err) console.log(err);
       console.log("File opened successfully")
})

fs.stat("./cool.txt", (err, stats)=>{
        console.log(stats.isFile())
        console.log(stats.isDirectory())
})

fs.readFile("./cool.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("The content of the file is =>",data)
    }
})