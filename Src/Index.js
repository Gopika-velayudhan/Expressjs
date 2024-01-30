const express = require("express");

const app = express();

const PORT = 3001;

app.listen(PORT,()=>console.log(`running expressjs server on port ${PORT}`))

app.get("/App",(req,res)=>{

    

    const userid = req.params.id;
    res.send(`User ID: ${userid }`);

    // const userAgent = req.get('user-agent')

    // res.send(`User-Agent: ${userAgent}`);
    if(req.accepts(json)){
        res.send([
            {
                item : "milk",
                stock : 1
            },
            {
                item : "milk",
                stock : 1
            }
    
        ]);

    }else{
        res.send("plain text")
    }
    
});