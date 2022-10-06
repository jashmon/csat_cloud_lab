var express = require('express')

var app = express()

const SERVER_PORT = 8081
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded()) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
    res.send("<h1>Hello World!</h1>");
    res.end();
})

app.get('/test1', function (req, res) {
    res.send("<h1>This is a test heading.</h1>");
    res.end();
})

app.get('/test2', function (req, res) {
    res.send("<h1>This is another test heading.</h1>");
    res.end();
})
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});