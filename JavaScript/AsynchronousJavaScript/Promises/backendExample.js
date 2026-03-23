function orderPizza(){
    return new Promise((resolve,reject)=>{
        let pizzaReady=true;
        setTimeout(()=>{
            if(pizzaReady){
                resolve("Pizza is ready to deliver")
            }
            else{
                reject("Pizza delivery failed");
            }
        },8000)//wait for 8 sec
    })
}
orderPizza()
.then(message=>{
    console.log(message);
})
.catch(err=>{
    console.log(err)
})
console.log("Waiting for the pizza while doing other things");