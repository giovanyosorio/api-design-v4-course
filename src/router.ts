import {Router} from "express"

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

router.put("/product/:id",(req,res)=>{
    res.send("hello world")
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