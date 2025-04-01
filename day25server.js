const http =require('http')
const fs=require('fs');
const { isUtf8 } = require('buffer');
const file='intex.txt'
const server =http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    if(req.method==='GET' && req.url ==='/'){
        res.end(JSON.stringify({data:'user'}))
    }
    else if(req.method ==='GET' && req.url =='/data'){
        const readFile=()=>{
            return fs.readFileSync(file,'Utf8');
        }
        const data = readFile()
        res.end(JSON.stringify(data));

    }
    else{
        res.end('no data found')
    }

})
server.listen(3000,()=>{
    console.log('sucess')
})