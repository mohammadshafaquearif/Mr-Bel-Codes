// filter =condition based selection
// let numbers=[10,20,30,40];
// let result=numbers.filter(num => num>20);
// console.log(result);

let users=[
    {firstname:"Bel", age:32},
    {firstname:"Mohammad",age:13},
    {firstname:"Saif",age:14}
];
let adults=users.filter(user=>user.age>=18);
console.log(adults);
