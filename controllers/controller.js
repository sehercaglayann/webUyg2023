const login=async(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}

const register=async(reg,res)=>{
    console.log(req.body)
}

module.exports={login,register}