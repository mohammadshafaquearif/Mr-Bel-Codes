function enrolPath(payMethod) {

  const courseFee = 200;
  let extraCharge = 0;

  switch (payMethod) {

    case "credit_card":
      extraCharge = 20;
      break;

    case "paypal":
      extraCharge = 30;
      break;

    case "upi":
      extraCharge = 0;
      break;

    case "bank_transfer":
      extraCharge = 10;
      break;

    default:
      console.log("Invalid payment method");
      return;
  }

  const finalAmount=courseFee+extraCharge;

  console.log(`Your payment method is: ${payMethod}`);
  console.log(`Your fixed course fee: ${courseFee}`);
  console.log(`Your extra charge is: ${extraCharge}`);
  console.log(`The final total amount to pay is: ${finalAmount}`);
}

enrolPath("credit_card");


