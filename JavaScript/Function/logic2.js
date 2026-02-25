function bill(name,noOfPackets){
    const tax=0.20;
    const price=12;
    let BillBeforetax=(noOfPackets*price);
    let BillAfterTax=BillBeforetax+BillBeforetax*tax;
    return "hello Mr/Mrx"+name+ "Your total bill is "+BillAfterTax;
}
let myBill=bill("Arif",2);
console.log(myBill);