import {Router} from "express"
import {body, validationResult} from "express-validator"
import { handleInputErrors } from "./modules/middleware"

const router=Router()

/**
 * Products 
 */
router.get("/product",(req,res)=>{
    res.send("hello world")
})

router.get("/product/:id",(req,res)=>{
    res.send("hello world")
})

router.put("/product/:id",body("name"), handleInputErrors,(req,res)=>{

})
router.post("/product",(req,res)=>{
    res.send("hello world")
})

router.delete("/product/:id",(req,res)=>{
    res.send("hello world")
})

/**
 * Update
 */

router.get("/update",(req,res)=>{
    res.send("hello world")
})

router.get("/update/:id",(req,res)=>{
    res.send("hello world")
})

router.put("/update/:id",(req,res)=>{
    res.send("hello world")
})
router.post("/update",(req,res)=>{
    res.send("hello world")
})

router.delete("/update/:id",(req,res)=>{
    res.send("hello world")
})

/**
 * Update Point
 */

router.get("/updatepoint",(req,res)=>{
    res.send("hello world")
})

router.get("/updatepoint/:id",(req,res)=>{
    res.send("hello world")
})

router.put("/updatepoint/:id",(req,res)=>{
    res.send("hello world")
})
router.post("/updatepoint",(req,res)=>{
    res.send("hello world")
})

router.delete("/updatepoint/:id",(req,res)=>{
    res.send("hello world")
})

export default router