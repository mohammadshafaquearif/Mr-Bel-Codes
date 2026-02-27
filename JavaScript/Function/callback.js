// In one function we are passing another function in the form of argument.
function processUser(name,callback){
    console.log("Processing User...");
    callback(name);// greet(name);
}
function greet(name){
    console.log("Hello "+name);
}
processUser("Shafaque",greet);