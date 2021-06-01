const express = require("express");
const Joi = require('joi');
const app = express();
// const students = require('./students');
app.use = (express.json());

const courses=[
    { "id": 1,"name": "Giovanni"},
    { "id": 2,"first_name": "Giovanni"},
    { "id": 3,"first_name": "Giovanni"},
    
  ];
  

app.listen(3000),()=>{
    console.log("listing on 3000")
};

//   get request handling

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));  
if(!course) res.status(404).send('the code not found');
res.send(course);
});


// post request handling

app.post('/',(req,res)=>{

 const course ={
     id: courses.length +1,
     name:req.body.name

 };
 courses.push(course);
 res.send(course);
});





// app.post('/g',(req,res,next)=>{
//     res.json({name:'vishal'});

// });

//CREATE Request Handler   second method 


app.post('/api/cousre', (req, res)=> {
 
    const schema ={
        name:Joi.string().min(3).required()
    };
    const result = Joi.vaildate(req.body,schema);
    
    if(result.error){
    res.status(400).send(result.error.details[0].message);
    return;


    // if (!req.body.name || req.body.name.length < 3){
    //     res.status(400).send('name is required and should be 3 char');
    //     return;
    }
    const course = {
    id: courses.length + 1,
    name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

