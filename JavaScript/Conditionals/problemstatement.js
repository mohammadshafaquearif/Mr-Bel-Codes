// Create a JavaScript program that calculates the monthly electricity bill based on the number of units consumed.

// The electricity bill should be calculated according to the following slabs:
// • First 100 units → ₹3 per unit
// • Next 200 units (101–300) → ₹5 per unit
// • Next 200 units (301–500) → ₹7 per unit
// • Above 500 units → ₹10 per unit

// If the total bill amount exceeds ₹2000, apply a 5% surcharge on the total bill.

//546=> (100*3)+(200*5)+(200*7)+(46*10)=> 300+1000+1400+460=>3160

function billAmount(units) {

if (units<0){
    console.log("Invalid input");
    return;
}
let bill=0;

  if (units <= 100) {

   bill=units*3;
} 
  else if ( units <= 300) {

   bill=(100*3)+((units-100)*5);

  } 
  else if (units <= 500) {
      bill=(100*3)+ (200*5)+((units-300)*7);

  } 
  else{
    bill=(100*3)+(200*5)+(200*7)+((units-500)*10);
  }

  if(bill>2000){
    bill+=bill*0.05;
  }
  console.log("Total bill: " + bill);

}


billAmount(546); 

billAmount(345);
