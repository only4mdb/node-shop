const express = require("express")
const router = express.Router()
const path=require("path");
const { render } = require("pug");
const rootDir=require('../util/path')
const admin = require('./admin');
const data = {
    name: 'John Doe',
    age: '30',
    account_balance: '15.5'
}


router.get('/', (req, res, next) => {
    const products=admin.products
    res.render("shop",{prods:products,docTitle:"Shop"})
})

router.get('/Log', (req, res,next) => {
    res.send(data)
    res.end()

})

module.exports = router
