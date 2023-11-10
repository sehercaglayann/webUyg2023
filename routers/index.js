const router=require("express").Router()
const routes=require('./routes')
router.use(routes)
module.exports=router    //indexin içerisine import ediyoruz daha sonra app.jsnin içine tanımlıyoruz.erişilmesi zor olsun diye index.js kullanırız
