const express = require("express")
const router = express.Router()
const path = require("path")
//const rootDir = require('../util/path')
const adminController = require("../controllers/admin")




router.get('/add-Product',adminController.AddProduct)

router.post('/add-product', adminController.PostProduct)


module.exports=router
