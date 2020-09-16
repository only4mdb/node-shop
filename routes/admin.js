const express=require("express")
const router=express.Router()
const path=require("path")
const rootDir=require('../util/path')


const products=[]

router.get('/add-Product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/shop')
})


exports.routes=router
exports.products=products
