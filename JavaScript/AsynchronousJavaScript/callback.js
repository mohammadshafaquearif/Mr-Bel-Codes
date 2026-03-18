function fetchData(callback){
    setTimeout(()=>{
        callback("We got the data");
    },2000)
}
fetchData((data)=>{
    console.log(data);
})
