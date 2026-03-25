// Larger app=multiple files
// We divide codes into different segments called as modules


// ES Modules

export function add(a,b){
    return a+b;
}

import {add} from "./math.js"
add();

// Common JS 

//export
module.exports=add;
// import
const add=require("./file");


