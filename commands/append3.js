var fs=require("fs");
function append3(src,dest){

    
    var data=fs.readFileSync(src);
    var res=data.toString().split('\n');
    for(let i=0;i<res.length;i++){
      if(res[i].length == 0 ){
        console.log(res.trim(i))
        
      }else{
        console.log(res[i])
      }
    }
    fs.copyFileSync(src,dest)
    
}

  module.exports={
    fn6: append3
 }