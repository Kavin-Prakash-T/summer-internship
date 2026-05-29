const promise=new Promise((resolve,reject)=>
    {console.log("this is a promise");reject("promise resolved")

    });
promise.then(()=>{
    console.log("Prommise handled");
})
.catch((error)=>{
    console.log("Error:",error.message)
})
