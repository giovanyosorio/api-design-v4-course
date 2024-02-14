import express from "express"
import router from "./router"
const app=express()




app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api",router)

app.listen(3000,()=>{
    console.log("server listening on port http://localhost:3000")
})