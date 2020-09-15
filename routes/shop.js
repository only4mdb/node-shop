const express = require("express")
const router = express.Router()
const path=require("path")
const rootDir=require('../util/path')
const data = {
    name: 'John Doe',
    age: '30',
    account_balance: '15.5'
}

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

router.get('/Log', (req, res,next) => {
    res.send(data)
    res.end()

})

module.exports = router
