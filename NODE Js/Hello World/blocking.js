const fs=require("fs")
//read file sync-->blocking-->jab 1 thread free ho jayega tub dusra kam karega
console.log(1);
console.log(fs.readFileSync("text.txt","utf-8"));
console.log(2)
//read file async-->non-blocking--->run line by line
console.log(3)
console.log(fs.readFile("text2.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
}))
console.log(4)
//default thread pool size is 4
//max no. of thread pools is your cpus
const os=require("os")
console.log(os.cpus().length)