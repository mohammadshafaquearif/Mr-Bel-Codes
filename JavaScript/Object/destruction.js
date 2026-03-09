// taking out values directly from object
let user={
    name1:"Bel",
    age:37
};
// Without destruction
// let name1 =user.name;
// let age=user.age;
// console.log(name1);
// console.log(age);

// With Object destructioning
let {name1,age}=user;
console.log(name1);
console.log(age);
