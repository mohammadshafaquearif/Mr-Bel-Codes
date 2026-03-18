function withdrawl(balance,amount){
    if (amount>balance){
        throw new Error("Insufficient balance");
    }
   return balance - amount; 
}
try{
    withdrawl(1000,2000);
}catch(err){
    console.log(err.message);
}