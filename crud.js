const fs= require('fs')
const file='data.txt'
const file1='data1.txt'
const file2='data2.txt'
const htmlFile='intex.html'
const writeFile=()=>{
    fs.writeFileSync(file,'its created by guna','utf-8')
    console.log("write the file")
}
// writeFile()

const readFile=()=>{
    const data=fs.readFileSync(file,'utf-8')
    console.log(data)
}
// readFile()
const updateFile=()=>{
    fs.appendFileSync(file,'easy to understand','utf8')
    console.log('its easy ')
}
// updateFile()
 const deleteFile=()=>{
    fs.unlinkSync('fail')
 }
//  deleteFile()
const writeFile1=()=>{
    const htmlData=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hi  i am guna</h1>
</body>
</html>`
    fs.writeFileSync(htmlFile,htmlData,'utf-8')
    console.log('create')
}
writeFile1()
