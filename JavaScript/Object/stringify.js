// Object-> JSON string(JavaScript Object Notation)
let user={
    name:"Arif",
    age:22
};
//console.log(user);
let jsonData=JSON.stringify(user);
console.log(jsonData);

// Use Case: API, Database and localStorage