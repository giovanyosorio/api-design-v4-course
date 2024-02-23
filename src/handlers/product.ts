import prisma from "../db"

// get all products
export const getProducts=async (req,res)=>{
    const user= await prisma.user.findUnique({
        where:{
            id:req.user.id
        },
        include:{
            products:true
        }
    })
    res.json({data:user.products})
}

// get one

export const getOneProduct=async(req,res)=>{
    const id=req.params.id
    const product=await prisma.product.findFirst({
        where:{
            id,
            belongsToId:req.user.id
        }
    })
    res.json({data:product})

}


export const createProduct=async(req,res)=>{
    const product =await prisma.product.create({
        data:{
            name:req.body.name,
            belongsToId:req.user.id
        }
    })
    res.json({data:product})
}


export const updateProduct=async(req,res)=>{
    const updateProduct=await prisma.product.update({
        where:{
           id_belongsToId:{id: req.params.id,belongsToId:req.user.id}
        },
        data:{
            name:req.body.name
        }
    })
    res.json({data:updateProduct})
}

export const deleteProduct=async(req,res)=>{
    const deleteProduct=await prisma.product.delete({
        where:{
            id:req.params.id,
            belongsToId:req.user.id
        }
    })
    res.json({data:deleteProduct})
}