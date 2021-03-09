var fs=require("fs");

function s(src){

    
    var data=fs.readFileSync(src);
    var res=data.toString().split('\n');
    for(let i=0;i<res.length;i++){
      if(res[i] == false){
        console.log(res[i])
        
      }else{
        console.log(res[i])
      }
    }
    
}

  module.exports={
    fn5: s
 }