
const Product = require("../models/product")


exports.AddProduct = (req, res, next) => {
    res.render("add-product")
}

exports.PostProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/shop')
}

exports.GetProducts = (req, res, next) => {
    Product.fetchAll(product => {
        res.render("shop", {
            prods: product,
            docTitle: "Shop"
        })
    })

}