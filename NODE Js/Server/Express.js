//express me query bhi inbuild hota hai
const http=require("http")
const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    return res.send("Home page")
})
app.get("/about",(req,res)=>{
    return res.send("about page");
})
app.get("/result",(req,res)=>{
    return res.send("your seach for "+ req.query.topic+ req.query.lec)
})
const myserver=http.createServer(app)
myserver.listen(8000,()=>console.log("server started"))
