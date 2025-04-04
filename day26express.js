const express=require("express")
const app=express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/guna" method="post">
        <input type="text" name="username">
        <input type="password" name="password">
        <input type="submit" name="submit">
    </form>
</body>
</html>
        `
);
});
const name="guna"
const pass="0303"
app.post('/guna',(req,res)=>{  
    const use=req.body.username;
    const pass=req.body.password;
    if(name === use && pass === pass){
        res.send("Yes form is created successfully ")
    }
    else{
        res.send("correct password ")
    }
})
app.listen(3000,()=>{
    console.log("sucessfully")
})