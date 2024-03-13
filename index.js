const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ayan:ayan@cluster0.7eifvyq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connected to database');
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })
    
})
.catch((err)=>{
    console.log('pagal insaan database connect nhi huwa '+err);
})






app.get('/',(req,res)=>{
    res.send('Hello World from 3000');
    console.log('Hello World from 3000');
})

app.get('/about',(req,res)=>{
    res.send('This is about page');
})
