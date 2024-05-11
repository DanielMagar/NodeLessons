const express = require('express');
const fs = require("fs");
const app = express();

const PORT = 5000;
app.get('/', function(req, res){
    res.send('hello express and node js')
});

app.get('/getMovies', function(req, res){
    // to read the json data from the file
    fs.readFile("./movies.json", (err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(JSON.parse(result))
        }
    })
})

app.listen(PORT, ()=> console.log("The server started in the PORT Number =>", PORT));