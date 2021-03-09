var fs=require("fs");
var path=require("path");

function append1(src,dest){
    
    fs.appendFileSync(src,dest)
 }
 module.exports={
    fn4: append1
 }
 