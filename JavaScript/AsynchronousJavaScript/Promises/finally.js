let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("failure"),10000);
})
myPromise
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("Task Completed! (cleaning Up)");
})