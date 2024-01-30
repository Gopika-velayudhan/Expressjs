const express =  require("express")

const app = express()
const path = require("path")

const PORT = 4006;
app.use(express.static(path.join(__dirname,'Public')))
app.get("/",(req,res)=>{
    // res.download(path.join(__dirname,'file.txt'))

    res.sendFile(path.join(__dirname,"Example.html"))
});

app.get("/download",(req,res)=>{
    res.download(path.join(__dirname,'Public/Images/Cacc1.webp'))
})


app.listen(PORT,()=>{
    console.log(`running the ${PORT}`);
})