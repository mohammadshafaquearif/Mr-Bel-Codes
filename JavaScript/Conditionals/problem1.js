function calcBill(units) {




if (units < 0) {

console.log("Units cannot be negative");

return;

}
let bill = 0;


if (units <= 100) {

bill = units * 3;

} 
else if (units <= 300) {

bill = (100 * 3) + ((units - 100) * 5);

} 
else if (units <= 500) {

bill = (100 * 3) + (200 * 5) + ((units - 300) * 7);

} 
else {

bill = (100 * 3) + (200 * 5) + (200 * 7)+ ((units-500) * 10);

// for anything else after units > 500

} 


// 50% surcharge if bill > 2000

if (bill > 2000) {

bill += bill * 0.05; // adding surcharge to any bill over $2000

}


console.log("The Bill is $" + bill);

}


calcBill(546);