let successfulPromise=Promise.resolve("Everything went well");
successfulPromise

.then(result=>{
    console.log(result);
})