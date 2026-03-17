// Whenever inside object if nested property does not exist we get error
// Situation
// let user={};
// console.log(user.address.city);

let user={};
console.log(user.address?.city);

// Backend Example
// console.log(req.user?.email);
// if((req.user?.email)==undefined){
//     alert("Email doesnt exist");
// }