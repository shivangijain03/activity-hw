#! /usr/bin/env node 
let display=require("./commands/display.js");
let input=process.argv.slice(2);
let linecount1 =require("./commands/n.js");
let linecount =require("./commands/b.js");
let app =require("./commands/append.js")
let append1 =require("./commands/append1.js");
let s = require("./commands/s.js");
const append3 = require("./commands/append3.js");


if(input.length == 1){
    display.fn(input[0]);
}else if(input.length == 2){
     if(input[0]=="-s"){
        s.fn5(input[1])
     }else if(input[0] == "-n"){
        linecount1.fn1(input[1])
     }else if(input[0] == "-b"){
         linecount.fn2(input[1])
     }else{
         display.fn(input[0])
         display.fn(input[1])
     }
}else if (input.length == 3){
    if(input[1] ==">"){
     app.fn3(input[0],input[2])
    }else if (input[1]==">>"){
     append1.fn4(input[0],input[2])
    }else{
        display.fn(input[0])
        display.fn(input[1])
        display.fn(input[2])
    }
}else{
    if(input[0]=="-s" && input[2]==">"){
        append3.fn6(input[1],input[3])
    }
}