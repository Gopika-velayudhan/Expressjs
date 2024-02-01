const express = require("express")

const PORT = 4000;

const app = express()

app.use(express.json())

app.use(express.urlencoded())
app.use(express.static('Public'))

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+"/Public/Body.html")
});

app.post("/formpost",(req,res)=>{
    console.log(req.body);

    res.sendStatus(200)

})





app.listen(PORT,()=>{
    console.log("its running in 4000");
})