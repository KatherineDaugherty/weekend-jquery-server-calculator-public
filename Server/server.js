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
    { num1: `33`, equation: `/`, num2: `23` }
];

function listInputs(request) {
    console.log(request);
    
    let data = request;
    console.log(`${data.num1}`, `${data.num2}`);

    inputHistory.push(data);
    console.log(inputHistory);

}
//GET and POST 
app.post("/submission", (req, res) => {
    console.log('PPPPOOOOOSSTTTT');
    
    console.log(req.body);
    listInputs(req.body);
    res.sendStatus(201);
});

app.get("/submission", (req, res) => {
    console.log('GGGEEEETTTT');
    
    res.send(inputHistory);
});