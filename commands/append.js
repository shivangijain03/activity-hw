var fs=require("fs");
var path=require("path");

function app(src,dest){

    if(fs.existsSync(dest) == false){
      fs.mkdirSync(dest);
    }
    
    fs.copyFileSync(src,dest)
 }
 module.exports={
    fn3: app
 }
 