setTimeout(() => {
    throw new Error("opps")
}, 3000);

process.on("uncaughtException",()=>{

})

process.on("unhandledRejection",()=>{
    
})