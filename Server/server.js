const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 50000;


//required for GET and POST routes
app.use(bodyParser.urlencoded({extended:true}));


//server up static files (HTML, CSS, Client JS )
app.use(express.static("server/public"));

//Get & Post Routes 

app.listen(PORT,() => {
    console.log('Server is running on port', PORT);   
});