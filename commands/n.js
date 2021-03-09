var fs=require("fs");
function linecount1(src){
    let count =1;
    
    var data=fs.readFileSync(src);
    var res=data.toString().split('\n');
    for(let i=0;i<res.length;i++){
        console.log(count,res[i])
        count++
    }
    
}

  module.exports={
    fn1: linecount1
 }