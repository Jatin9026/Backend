const express=require("express")
const app=express();
const users=require("./MOCK_DATA.json");
const fs=require("fs");
const mongoose=require("mongoose");//mongoose ko import kiya
////Hum MongoDB me ek user model** bana kar, usse **local database jatin` se connect kar rahe hain data ko store ya access karne ke liye.
//mongodb ke local server sse jatin name  local database ko connect karti hai 
mongoose.connect("mongodb://127.0.0.1:27017/jatin-201").then(()=>console.log("MogonDb connected to server")).catch((err)=>console.log("err",err));
//hamara database ka structure banaya
const Userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    job_title:{
        type:String,
    },
    gender:{
        type:String,
    },
},{timestamps:true})
//User naam ka ek model bana rahi hai jo MongoDB ke collection “user” ko Userschema ke structure ke saath connect karega.
const User=new mongoose.model("user",Userschema);








app.use(express.urlencoded({extended:false}))//-->headers ko dekhta hai ki kis tarah ka data hai fir use parse karta hai 
app.use((req,res,next)=>{
console.log("heello from middleware 1");
req.myName="jatin"; 
next();
})
app.use((req,res,next)=>{
console.log("heello from mifdfleware 2",req.myName);
next();
})









app.get("/users", async (req,res)=>{
    const alldbusers=await User.find({});
    const html=`
    <ul>
    ${alldbusers.map((user)=>`<li>${user.email}</li>`).join("")}
    </ul>
    `
    res.send(html);
})








app.get("/api/users",(req,res)=>{
    //always add x to custom header 
    res.setHeader("X-Name" ,"jatin");
    console.log(req.headers)
    return res.send(users);
    
})







app.route("/api/user/:id").get((req,res)=>{
    const id = User.findById(req.params.id);
}).put((req,res)=>{
    return res.json(users);
}).patch((req,res)=>{
    return res.json({status:"pending"});
}).delete((req,res)=>{
    return res.json({status:"pending"});
})












app.post("/api/user",async (req,res)=>{
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({Msg:"All mentions field are required"});
    }
    const result=await User.create({
        firstname:body.first_name,
        lastname:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    })
    console.log(result)
    return res.status(201).json({msg:"success"})
})













const port=8000;
app.listen(port,()=>{
    console.log("server is started",port);
})