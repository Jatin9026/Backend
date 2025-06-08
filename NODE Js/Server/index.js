//now we are going to create http server
//api server
const http=require("http")
const fs=require("fs")
const url =require("url")


function myhandler(req,res){
    if(req.url=="/fevicon.ico") return res.end()
    const log=`the current time is ${Date.now()} and ${req.method} and url is ${req.url} \n`//file content
const myurl=url.parse(req.url,true)//parse kar idya matlab obj ko divide kar diya
// console.log(myurl);
fs.appendFile("log.txt",log,(err,data)=>{///appendn on that file
switch(myurl.pathname){
    case "/":
    if(req.method=="GET"){
        res.end("Home page")
    }
    break;
    case "/about":
    const username=myurl.query.name
    res.end(` hii from ${username}`)
    break;
    case "/search":
    const content=myurl.query.search_query;
    res.end(`here are your result ${content}`)
    break;
    case "/signup":
    if(req.method=="GET"){
        res.end("this is singup form")
    }
    else if(req.method =="POST"){
        //db querry
        res.end("your data is added succesfully")
    }
    default:
    res.end("404 not found")
}//you can send anything
})
}///ye my handler function express likhega
const myserver=http.createServer(myhandler)//create server
//this createServer create a web server ab server takes two things req and res
myserver.listen(8001,()=>console.log("server started"));//server ko port pe run kiye