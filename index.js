import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var allBlogs = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.render('index.ejs', {blogs: allBlogs});
});

app.get('/write', (req,res) => {
    res.render('write.ejs');
});

app.get('/read', (req,res) => {
    res.render('read.ejs', {blogs: allBlogs});
});

app.post('/read', (req,res) => {
    var blog = {"title": req.body.title, "content": req.body.content};
    allBlogs.push(blog);
    console.log(req.body);
    res.redirect('/read');
});

app.listen(port, (err)=>{
    if(err){console.log(err)}
    else{console.log(`Server running on ${port}`)}
});

