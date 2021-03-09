var fs=require("fs");
function linecount(src){
    let count =1;
    
    var data=fs.readFileSync(src);
    var res=data.toString().split('\n');
    for(let i=0;i<res.length;i++){
      if(res[i] == false ){
        console.log(res[i])
        
      }else{
        console.log(count, res[i])
        count++
      }
    }
    
}

  module.exports={
    fn2: linecount
 }