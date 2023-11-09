const mysql=require('mysql')    
require('dotenv/config')
var dbConn=mysql.createConnection({
    user:process.env.MYSQL_USER,     //user:"root",
    password:process.env.MYSQL_PASSWORD,   //password:"",    //şifreyi yazmak yerine güvenliliğini arttırmak için yöntem uygulamamız lazım dotenv
    database:process.env.MYSQL_DB_NAME,  //database:"kampus",
    host:process.env.MYSQL_INSTANCE_NAME   //host:"localhost"  ENV'yi kullanarak güvenliği sağladık
})
dbConn.connect((err)=>{
    if(!err){
        console.log("Veritabanına Bağlandı")
    }else{
        console.log("Bağlantı hatası")
    }
})
module.exports=dbConn