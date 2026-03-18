function processOrders(amount){
    if(amount<100){
        throw new Error ("Failed to Process because amount is less than 100");
    }
    return "Order placed";
}
try{
    let result=processOrders(10);
    console.log(result);

}catch(err){
   console.log(err.message);
}