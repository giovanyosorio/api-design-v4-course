import jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt";

export const comparePassword =  (password, hash) => {
    return bcrypt.compare(password, hash)
}


export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}
export const createJWT =(user)=>{
    const token =jwt.sign({id:user.id,username:user.username},process.env.JWT_SECRET)
return token
}


export const protect=(req,res,next)=>{
    const bearer=req.headers.authorization

    if(!bearer){
        res.status(401).json({message:"No token"})
        return
    }

    const [,token]=bearer.split(" ")

    if(!token){
 
    }
    try {
        const user=jwt.verify(token,process.env.JWT_SECRET)
        req.user=user
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"No token"})
        return
        
    }

}