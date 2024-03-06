import express from "express"
import router from "./router"
import morgan from "morgan"
import cors from "cors"
const app=express()
import *as dotenv from "dotenv"
import { protect } from "./modules/auth"
import { createUser, signin } from "./handlers/user"
import config from "./config"
dotenv.config()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res,next)=>{
    res.json({message:"hello"})
})

app.use("/api", protect,router)

app.post("/user",createUser)
app.post("/signin", signin);

app.use((err,req,res,next)=>{
if(err.type==="auth"){
    res.status(401).json({message:"unauthorized"})


}else if(err.type==="input"){
    res.status(400).json({message:"Invalid input"})
} else{
    res.status(500).json({message:"error server"})
}
})

app.listen(config.port,()=>{
    console.log(`server listening on port http://localhost:${config.port}`)
});
export default app;