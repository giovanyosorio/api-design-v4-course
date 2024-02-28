import {Router} from "express"
import {body, oneOf, validationResult} from "express-validator"
import { handleInputErrors } from "./modules/middleware"
import { createProduct, deleteProduct, getOneProduct, getProducts } from "./handlers/product"

const router=Router()

/**
 * Products 
 */
router.get("/product",getProducts)

router.get("/product/:id",getOneProduct)

router.put("/product/:id",body("name"), handleInputErrors,createProduct)
router.post("/product",body("name"), handleInputErrors,(req,res)=>{
    res.send("hello world")
})

router.delete("/product/:id",deleteProduct)

/**
 * Update
 */

router.get("/update",(req,res)=>{
    res.send("hello world")
})

router.get("/update/:id",(req,res)=>{
    res.send("hello world")
})

router.put("/update/:id",
body("title").optional(),
body("body").optional(),
body("status").isIn(["IN_PROGRESS","SHIPPED","DEPRECATED"]),
body("version").
optional(),(req,res)=>{
    res.send("hello world")
})
router.post("/update",body("title").exists(),
body("body").exists().isString(),(req,res)=>{
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

router.put("/updatepoint/:id",body("name").optional().isString(),body("desciption").optional().isString(),(req,res)=>{
    res.send("hello world")
})
router.post("/updatepoint",body("name").optional().isString(),body("desciption").optional().isString(),body("updateId").exists().isString(),(req,res)=>{
    res.send("hello world")
})

router.delete("/updatepoint/:id",(req,res)=>{
    res.send("hello world")
})

export default router