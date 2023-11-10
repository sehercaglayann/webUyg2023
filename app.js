const express = require('express')
const db_connect=require('./db/mysql_connect')    //mysql connecti require ettik
const router=require('./routers')    //router klasörünü aldığımız an otomatik olarak indexlemiş oluyoruz.
require('dotenv/config')
const app = express()
require('dotenv/config')
app.get('/', function (req, res) {
  res.send('Anasayfa')
})
app.get('/app', function (req, res) {
    res.send('app sayfası')
  })
  
app.use(express.json({limit:'50mb',extended:true,paramaterLimit:50000}))
app.use('/api,router')
app.listen(process.env.PORT)                       //app.listen(process.env.PORT)