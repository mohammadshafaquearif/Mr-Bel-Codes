//Copu object or merge objects
let user={
    name1:"Bel",
    age:37
};
let details={
    age:35,
    city:"London",
    country:"UK"
}
// COPYING->. let newUser={...user};
//console.log(newUser);

let result={...details,...user};
console.log(result);
