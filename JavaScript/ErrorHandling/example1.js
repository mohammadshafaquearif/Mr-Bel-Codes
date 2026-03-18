try{
    let data=JSON.parse('invalid json');
}catch(error){
    console.log("Error comes: ", error.message);
}
finally{
    console.log(" This will always run");
}