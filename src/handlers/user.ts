import prisma from "../db"
import { comparePassword, createJWT, hashPassword } from "../modules/auth"

export const createUser=async(req,res,next)=>{
    try {
        const user=await prisma.user.create({
            data:{
                username:req.body.username,
                password:await hashPassword(req.body.password)
            }
        })
        const token=createJWT(user)
        res.json({token})
    } catch (e) {
        e.type="input"
        next(e)
    }

}

export const signin =async (req,res)=>{

    const user=await prisma.user.findUnique({
        where:{
            username:req.body.username

        }
    })
    const isValid = await comparePassword(req.body.password, user.password)
    if(isValid){
        const token=createJWT(user)
        res.json({token})
    }
    else{
        res.status(401).json({message:"Invalid credentials"})
    }
}