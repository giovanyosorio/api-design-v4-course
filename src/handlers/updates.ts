import prisma from "../db"

export const getOneUpdate=async(req,res)=>{
const update=await prisma.update.findUnique({
    where:{
        id:req.params.id
    }
})
res.json({data:update})
}

export const getUpdates=async(req,res)=>{
    const products=await prisma.product.findMany({
        where:{
            belongsToId:req.user.id
        },
        include:{
            updates:true
        }
    })
    const updates=products.reduce((allUpdates,product)=>{
        return [...allUpdates,...product.updates]
    },[])
   res.json({data:updates})
}

export const createUpdate=async(req,res)=>{
    const {productId,...rest}=req.body
    const product=await prisma.update.findUnique({
        where:{
            id:req.body.productId
        }
    })
    if(!product){
        //does not belong to users
        return res.json({message:"nope"})
    }
    const update=await prisma.update.create({
        data:{
            title:req.body.title,
            body:req.body.body,
            product:{connect:{id:product.id}}
        }
    })
    res.json({data:update})
}
export const updateUpdate=async(req,res)=>{
    const products=await prisma.product.findMany({
        where:{
            belongsToId:req.user.id,
        },
        include:{
            updates:true
        }
    })
    const updates=products.reduce((allUpdates,product)=>{
        return [...allUpdates,...product.updates]
    },[])
    const match=updates.find(update=>update.id===req.params.id)
    if(!match){
      return  res.json({message:"nop"})
    }
    const updateUpdate=await prisma.update.update({
        where:{
            id:req.params.id
        },
        data:req.body
    })
    res.json({data:updateUpdate})
}
export const deleteUpdate=async(req,res)=>{
    const products=await prisma.product.findMany({
        where:{
            belongsToId:req.user.id,
        },
        include:{
            updates:true
        }
    })
    const updates=products.reduce((allUpdates,product)=>{
        return [...allUpdates,...product.updates]
    },[])
    const match=updates.find(update=>update.id===req.params.id)
    if(!match){
      return  res.json({message:"nop"})
    }
    const deleted=await prisma.update.delete({
        where:{
            id:req.params.id
        }
        
    })
    res.json({data:deleted})
    
}