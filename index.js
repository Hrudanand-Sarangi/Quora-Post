const express= require("express");
const app= express();
const path= require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const port=8080;

app.listen(port,()=>{
    console.log("Port is listining");
})

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


let posts=[
    {
        id: uuidv4(),
        username: "Hrudanand",
        content: "I love coding now!",
    },
    {
        id: uuidv4(),
        username: "Swagatika",
        content: "I love mr.H!"
    },
    {
        id: uuidv4(),
        username: "Gita",
        content: "I love to read!"
    },
    {
        id: uuidv4(),
        username: "Pramod",
        content: "I love to work and good food!"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/post/new",(req,res)=>{
    res.render("form.ejs");
})

app.post("/posts",(req,res)=>{
    let id= uuidv4();
    let{username,content}= req.body;
    posts.push({id,username,content});
    res.redirect("/posts");

});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p)=> id === p.id);
    let newContent=req.body.content;
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");

});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts= posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});

 