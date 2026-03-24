let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(5),5000)// initialize promise resolves with 5 after 1 second
});
myPromise
.then(result=>{
    console.log(result);//print 5
    return result*2;// becomes 10
})
.then(result=>{
    console.log(result);//10
    return result+2;// becomes 12
})
.then(result=>{
    console.log(result);// print 12
})