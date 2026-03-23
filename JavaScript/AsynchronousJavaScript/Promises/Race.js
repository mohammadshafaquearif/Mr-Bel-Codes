let promise1=Promise.resolve("Task 1 done");
let promise2=Promise.reject("Task 2 rejected");
let promise3=Promise.resolve("Task 3 done");

Promise.race([promise1,promise2,promise3])
.then(results=>{
    console.log(results);
})
.catch(error=>{
    console.log(error);
})