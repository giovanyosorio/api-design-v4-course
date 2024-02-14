import express from "express"
import router from "./router"
import morgan from "morgan"
const app=express()



app.use(morgan("dev"))
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api",router)

app.listen(3000,()=>{
    console.log("server listening on port http://localhost:3000")
})