// function sum(...numbers){
//    let total =0;
//    for(let num of numbers){
//     total+=num;
//    }
//    return total;

// }
// let addition=sum(10,20,20,40);
// console.log(addition);


function sum(a,b,...numbers){
   let total =a+b;
   for(let num of numbers){
    total+=num;//O(n)
   }
   return total;

}
let addition=sum(10,20,20,40);
console.log(addition);