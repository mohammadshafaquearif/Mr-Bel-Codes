let numbers=[10,30,60];
// reduce= convert array->single value
let sum=numbers.reduce(function(total,num){
    return total * num;
},1);
console.log(sum);
// Syntax
// array.reduce(function(accumulator,currentValue){
// return newValue
///}, initialvalue)