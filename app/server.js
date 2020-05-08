const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/students', (req, res) => {
   res.send('<h1>Hello students!</h1>');
});


app.listen(port, () => {
    console.log("🚀 Started server...")
});
