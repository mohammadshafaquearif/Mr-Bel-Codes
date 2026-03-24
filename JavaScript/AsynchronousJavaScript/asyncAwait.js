
function myPromise(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>resolve(5),5000)// initialize promise resolves with 5 after 1 second
});
}

async function run(){
    let result=await myPromise();//5
    console.log(result);

    result=result*2;//10
    console.log(result);

    result=result+2;
    console.log(result);
}
run();
// Async/await is just syntactic sugar over promises, but it makes asynchronous code look like synchronous code.
