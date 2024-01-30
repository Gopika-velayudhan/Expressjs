const express = require("express");

const app = express();

const PORT = 7000;
app.use(express.json())


const Data = [
    {
        item : "milk",
        stock : 1
    },
    {
        item : "milk",
        stock : 1
    }

];

app.get("/request1",(req,res)=>{
   
        res.send(Data);

       

   
    
});

app.post('/request1',(req,res)=>{
    console.log(req.body);
    res.send(201);
});
app.listen(PORT,()=>console.log(`running expressjs server on port ${PORT}`))
