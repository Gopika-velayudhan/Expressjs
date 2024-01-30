const express = require("express")

const app = express()

const PORT = 4004;

app.get('/flights/:from-:to',(req,res)=>{


     res.send(`flights from ${req.params.from}to ${req.params.to}`)

     res.send(req.params.catagory)
    const {category} = req.params

    if(category==='laptop'){
        res.send("laptop page");
    }else if(category==="mobile"){
        res.send("mobile page")
    }else{
        res.send('other products');
    }
     
    


})
app.listen(PORT,()=>{
    console.log("running routing")
})
