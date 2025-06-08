//now we are going to create http server
//api server
const http=require("http")
const fs=require("fs")
const url =require("url")
const myserver=http.createServer((req,res)=>{//create server
const log=`the current time is ${Date.now()}  and url is ${req.url} the new request is revieved`//file content
const myurl=url.parse(req.url,true)//parse kar idya matlab obj ko divide kar diya
console.log(myurl);
fs.appendFile("log.txt",log,(err,data)=>{///appendn on that file
switch(myurl.pathname){
    case "/":
    res.end("This is home page")
    break;
    case "/about":
    const username=myurl.query.name
    res.end(` hii from ${username}`)
    break;
    case "/search":
    const content=myurl.query.search_query;
    res.end(`here are your result ${content}`)
    break;
    default:
    res.end("404 not found")
}//you can send anything
})
})//this createServer create a web server ab server takes two things req and res
myserver.listen(8001,()=>console.log("server started"));//server ko port pe run kiye
