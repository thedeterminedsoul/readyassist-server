const express = require('express')
const app = express()
const port = 3000

// database settings
var mysql = require('mysql')
var conInfo = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "readyassist"
}
var connection = mysql.createConnection(conInfo);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/students', (req, res) => {
   res.send('<h1>Hello students!</h1>');
});

app.get('/candidates', (req, res) => {
    // in response I want to reply with all the candidate information
    let sql = 'select * from candidates';
    
    if(req.query.id) {
        sql = sql + ' where id = ' + req.query.id;

        // select * from candidates where id = 1
    }
    
    connection.query(sql, function(err, data, fields){
        if(err) {
            res.status(500);
            res.send(err);
        }
        let responseObject = {
            data: data
        }
        res.send(responseObject);
    })
});


app.listen(port, () => {
    console.log("🚀 Started server...")
});
