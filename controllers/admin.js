const products=[]

exports.AddProduct=(req,res,next)=>{
    res.render("add-product")
}

exports.PostProduct=(req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/shop')
}

exports.GetProducts=(req, res, next) => {
    console.log(products)
    res.render("shop",{prods:products,docTitle:"Shop"})
}