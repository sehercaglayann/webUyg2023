const router=require('express').Router()
const {login,register}=require('../controllers/controller')

router.post("register",register)

//post:veri gönderme, get:veri alma, put :veri güncelleme,patch:veri güncelleme
module.exports=router