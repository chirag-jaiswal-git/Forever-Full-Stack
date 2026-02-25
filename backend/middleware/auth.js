import jwt from 'jsonwebtoken';

const authUser = (req,res,next)=>{

  const token = req.headers.token;


  if(!token){
    return res.status(401).json({
      success:false,
      message:"Unauthorized access."
    })
  }

try {
  const token_decoded = jwt.verify(token,process.env.JWT_SECRET);
  req.userId = token_decoded.id;
  next();
} catch (error) {
  console.log(error);
  return res.status(401).json({
    success:false,
    message:error.message || "Unauthorized access."
  })
}
}

export default authUser