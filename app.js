const fs=require('fs');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');
const path = require('path');



app.use(bodyparser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/favourite',function(req,res){
    console.log("am in favourite")
    res.sendFile(path.join(__dirname+'/favourite.html'));
});

    app.post('/add',function(req,res){
       // if((req.body.moviename)&&(req.body.director)){
           // fs.readFile('./data.json','utf8',function(err,data){
               // if(data.length!=0){
     // var oldTodos = JSON.parse(data);
     // oldTodos.push({
        //  moviename:req.body.moviename,
        //  director:req.body.director,
//          createdAt:new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getYear()
       // });
     // var newTodo = JSON.stringify(oldTodos);
     // fs.writeFile('./data.json',newTodo,'utf8');
  // }else{
         var result = [];
      result.push({
        moviename:req.body.moviename,
        director:req.body.director,
      });
      var finalArray = JSON.stringify(result);
      fs.appendFile('./data.json',finalArray,'utf8');
   // }
   // });
       // }
        
    });

app.listen(3000,function(){
    console.log("my application started");
});




