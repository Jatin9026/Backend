function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

////method 1 of export
// module.exports={
//     add,sub
// }
//method 2
exports.add1 = (a,b)=>a+b;
exports.mul2 =(a,b)=>a*b;
exports.sub3=(a,b)=>a-b;