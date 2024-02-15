import express from "express"
import router from "./router"
import morgan from "morgan"
import cors from "cors"
const app=express()



app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api",router)

app.listen(3000,()=>{
    console.log("server listening on port http://localhost:3000")
})