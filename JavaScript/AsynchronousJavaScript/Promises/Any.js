let promise1=Promise.resolve("Cake");
let promise2=Promise.reject("Chocolate");
let promise3=Promise.resolve("Coffee");

Promise.any([promise1,promise2,promise3])
.then(results=>{
    console.log(results);
})
.catch(error=>{
    console.log(error);
})