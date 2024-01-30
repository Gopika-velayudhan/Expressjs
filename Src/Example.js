const express = require("express");
const app1 = express();
const path = require("path")

const PORT = 4002;

app1.listen(PORT, () => console.log(`server is running ${PORT}`));

app1.get("/getRequest", (req, res) => {
    res.sendFile(path.join(__dirname,'Example.html'))
});
app1.post('/postRequest',(req,res)=>{
    res.send("hello the request successful post running")
});







