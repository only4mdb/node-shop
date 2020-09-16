const express = require("express")
const router = express.Router()
const adminController = require("../controllers/admin")
const path=require("path");
const rootDir=require('../util/path')
const admin = require('./admin');
const data = {
    name: 'John Doe',
    age: '30',
    account_balance: '15.5'
}


router.get('/', adminController.GetProducts)



module.exports = router
