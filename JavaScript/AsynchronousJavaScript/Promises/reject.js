let failedPromise=Promise.reject("Something went wrong");
failedPromise

.catch(error=>{
    console.log(error);
})