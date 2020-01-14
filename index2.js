const express = require("express");
const app = express();
const bodyPaser = require('body-parser');
require('dotenv').config();
const people = [];

app.use(bodyPaser.json());


app.get('/people',(req,res) => {
    const{name} = req.query;
    if (name) {
        const find = people.filter(i => i.name.includes(name));
        return res.send(find);
    }
    res.json(people);
});

app.post('/people',(req,res) => {
    const body = req.body;
    people.push(body);
    console.log(typeof people);
    res.sendStatus(201);
    res.end();
});

app.listen(process.env.port);