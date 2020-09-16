const files = require("fs")
const path = require("path")
const rootDir = require('../util/path')

const p = path.join(rootDir, "data", "products.json")

class Product {
    constructor(t) {
        this.title = t
    }

    save() {


        files.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this)
            files.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        });
        //files.writeFileSync("productdb.js",JSON.stringify(products))
    }

    static fetchAll(cb) {
        files.readFile(p, (err, fileContent) => {
            if(err){
                cb([])
            }
            return cb(JSON.parse(fileContent))
        })
    }


}

module.exports = Product