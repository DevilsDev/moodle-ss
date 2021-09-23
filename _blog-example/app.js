// Get required
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ejs = require('ejs');
const _ = require('lodash');

const startContent = '❤️'
const aboutContent = '😘😍😎'
const contactContent = '😁❤️😁💻'

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {
      startContent: startContent,
      posts: posts
  });  
});

app.get('/about', function(req, res) {
    res.render('about', {
        aboutContent: aboutContent
    });
});

app.get('/contact', function(req, res) {
    res.render('contact', {
        contactContent: contactContent
    });
});

app.get("/write",function(req,res){
    res.render("write");
  });


let posts = [];

app.post('/write',function(req,res){
    //console.log(req.body.postTitle);
    const post = {
      title : req.body.postTitle,
      content: req.body.postBody
    };
    posts.push(post);
    res.redirect("/")
  // to redirect to another route
  });

app.get('/posts/:parameter', function(req, res) {
    const requestTitle = _.lowerCase(req.params.parameter) // lowercase 

    posts.forEach(function(post) {
        const storedTitle = _.lowerCase(post.title)
        if(storedTitle === requestTitle) {
            res.render('post', {
                title: post.title,
                content: post.content
            })
        }
    });
});

app.listen(3000, function() {
    console.log('Server working on port 3000!');
});

//❤️ 
//console.log(`Hello ${} there`)
//💩