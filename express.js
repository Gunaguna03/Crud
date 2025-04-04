const express = require("express")
const app = express()
app.get('/',(req,res)=>{
res.send("first name")
});
app.get('/second',(req,res)=>{
    res.send("second items ")
});
app.get('/third',(req,res)=>{
    res.send("Third")
});
app.listen(3000,()=>{
    console.log("sucessfull executed")
})     