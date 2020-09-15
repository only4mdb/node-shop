const http=require('http')
const express=require('express')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const bodyParser=require("body-parser")
const app=express();


app.use(bodyParser.urlencoded());

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)

//const server=http.createServer(app)
app.listen(7000)