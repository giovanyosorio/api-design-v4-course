import jwt from "jsonwebtoken"

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