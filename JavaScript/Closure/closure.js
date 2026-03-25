//
//Closure=function + its outer scope memory
// Inner function remembers variables of outer function
function outer(){
    let count=0;
    return function inner(){
        count++;
        console.log(count);
    }
}
let counter=outer();// Execution flow
counter();
counter();