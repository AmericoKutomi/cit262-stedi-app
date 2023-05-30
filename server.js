const express = require('express');
// in order to enable require, I needed to remove the declaration
// "type": "module" in package.json because there was an error
// message saying that I should use import as I was working
// with module. So, I decided to remove that declaration, and it worked.

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/americo', (req,res) => {res.send("Hello Americo")});

app.listen(port, ()=>console.log("Listening"));