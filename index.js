const http=require('http')
const express=require('express')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const bodyParser=require("body-parser")
const path = require('path')
const app=express();

app.set("view engine","pug")
app.set("views","views")
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)

//const server=http.createServer(app)
app.listen(7000)