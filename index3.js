const express = require("express");
const app = express();
require('dotenv').config();
const bodyPaser = require('body-parser');
const posts = [];
let id = 0;

app.use(bodyPaser.json());

app.get("/v1/posts",(req,res) => {
    res.json(posts);
    res.end();
});


app.post("/v1/posts",(req,res) => {
    let {author,content} = req.body;
    let post = {id:id++,author,content};
    posts.push(post);
    res.status(201).send("Successfully got the data");
    res.end();
});

app.get("/v1/posts/:id",(req,res) => {
    const filteredID =  req.params.id;
    const post = posts.find(i => i.id === Number(filteredID));
    if (post) {
        res.status(200).json(post);
    } else {
        return res.sendStatus(404);
    }
});

app.put("/v1/posts/:id",(req,res) => {
    const {id} =  req.params;
    const {author,content} = req.body;
    const index = posts.findIndex(i => i.id === Number(id));
    if(index != -1) {
        if(posts[index].author != author) {
            posts[index].author = author
        }
        if(posts[index].content != content) {
            posts[index].content = content;
        }    
        res.status(200).send("Sucessfully replace the data");
    } else {
        return res.sendStatus(404);
    }

});

app.delete("/v1/posts/:id",(req,res) => {
    const {id} =  req.params;
    const post = posts.find(i => i.id === Number(id));
    if (post) {
        posts.splice(posts.indexOf(post),1);
        res.status(200).send("Successfully delete the data");
    }else {
        res.status(400).json("post not found");
    }
});

app.listen(process.env.port);