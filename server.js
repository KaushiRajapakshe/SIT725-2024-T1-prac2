var express = require("express")
var app = express()
var port = process.env.port || 3000;
// First Method
// respond with summation when a GET request is made with inputs of two numbers
app.get('/addTwoNumbers', (req, res) => {
    var num1 = req.query.num1
    var num2 = req.query.num2
    //validation for two numbers input
    if (isNaN(num1) || isNaN(num2)) {
        response = {
            data: NaN,
            message: "invalid input",
            statusCode: 400,
        }
        res.end(JSON.stringify(response));
    } else {
        response = {
            data: parseFloat(num1) + parseFloat(num2),
            message: "success",
            statusCode: 200,
        }
        res.end(JSON.stringify(response));
    }
})

app.listen(port, () => {
    console.log("App listening to: " + port)
})