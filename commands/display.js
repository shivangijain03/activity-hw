let fs=require("fs");
function display(src){
    var content=fs.readFileSync(src);
    console.log(content.toString());
}
module.exports={
   fn: display
}