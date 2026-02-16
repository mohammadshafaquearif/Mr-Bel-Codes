let age=25;
console.log(age);
console.log(typeof(age));

let price=24.009;
console.log(typeof(price));

let isLoggedIn=true;
console.log(typeof(isLoggedIn));

let isAdmin=false;
console.log(typeof(isAdmin));

let name1 ='Shafaque';
let lastname="Arif";
console.log(typeof(name1));
console.log(typeof(lastname));

let x;
console.log(x);
console.log(typeof(x));

let y=null;
console.log(y);
console.log(typeof(y));// Object -> Historical JS Bug


let z=123456789234567812345678n;
console.log(typeof(z));

let id=Symbol("12108048");
console.log(typeof(id));

// Non-Primitive DataTypes:- Stores complex data


//Function
function add( a,b){
    console.log(a+b);

}
add(20,30);
// Object

let person={
    name:"Bel",
    age:34
}
console.log(person.age);

// Array

let countries=["america","India","UK","Nigeria","Congo",true,23];
console.log(countries);
