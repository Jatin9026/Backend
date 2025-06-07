const fs=require("fs")
//this is sync.....
//sync-->blocking request
//async--->non blocking request
fs.writeFileSync("text.txt","i am  sync")
//this is async----->expect call backfuntion which give res and err
fs.writeFile("text2.txt","i am async",(err)=>console.log(err))
//file read sync--->return result
console.log(fs.readFileSync("contact.txt","utf-8"))
//fileread async
fs.readFile("contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error->",err);
    }
    else{
        console.log(result)
    }
})
fs.appendFileSync("./contact.txt",new Date().getDate().toLocaleString())
fs.appendFileSync("./contact.txt",`${Date.now()} is the current time stamp`)
fs.cpSync("contact.txt","copy.txt")
// fs.unlinkSync("copy.txt")
console.log(fs.statSync("contact.txt"))
fs.mkdirSync("mkfile/a/a",{recursive:true})