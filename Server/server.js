const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

//required for GET and POST routes
app.use(bodyParser.urlencoded({extended:true}));

//server up static files (HTML, CSS, Client JS )
app.use(express.static("server/public"));

app.listen(PORT,() => {
    console.log('Server is running on port', PORT);   
});

//hardcode array of objects data. 
let inputHistory = [];

let inputData = {num1: `2`,
equation: `*` ,
num2: `2`};

let solution = 0;

function doMath(request){
    let data = request.data;
    

    inputHistory.push(inputData);
    console.log(inputHistory);
    
}


//GET and POST 
app.post("/submission", (req, res) => {
    console.log(req.body);
    // doMath (req.body);
    res.sendStatus(201);
});

app.get("/submission", (req, res) => {
    res.send(inputHistory);
});