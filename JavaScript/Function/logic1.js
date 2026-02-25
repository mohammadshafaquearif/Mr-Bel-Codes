function calculateTax(amount){
    let tax= amount * 0.18;
    return tax+amount;
}
let finalPrice=calculateTax(5000);
console.log(finalPrice);