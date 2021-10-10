const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

//required for GET and POST routes
app.use(bodyParser.urlencoded({ extended: true }));

//server up static files (HTML, CSS, Client JS )
app.use(express.static("server/public"));

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

//hardcode array of objects data. 
let solution = 0;
let inputHistory = [
    { num1: `33`, equation: `-`, num2: `23`, equals: `=`, solution: `10` }
];

function listInputs(request) {
    // console.log(request); //logs array of data
    let data = request;
    console.log(
        `${data.num1}`,
        `${data.equation}`,
        `${data.num2}`,
        `${data.equals}`,
        `${data.solution}
    `);
    inputHistory.push(data);
}
//GET and POST 
app.post("/submission", (req, res) => {
    console.log(' in SERVER POST');
    console.log(req.body); // array of data sent over 
    calculate(req.body)
    listInputs(req.body); //call listInputs 
    res.sendStatus(201);
});

// calculator logic 
function calculate (response){
    switch (response.equation) {
        case `+`:
            response.solution = Number(response.num1) + Number(response.num2)
            break;
        case `-`:
            response.solution = Number(response.num1) - Number(response.num2)
            break;
        case `*`:
            response.solution = Number(response.num1) * Number(response.num2)
            break;
        case `/`:
            response.solution = Number(response.num1) / Number(response.num2)
            break;
    }
    inputHistory.push(response)
    console.log(`calculator`, solution); //log solution  = number 1 
    return solution;
}

//GET when asked for data 
app.get("/submission", (req, res) => {
    console.log('GET- SUBMISSION ');
    res.send(inputHistory);
});

