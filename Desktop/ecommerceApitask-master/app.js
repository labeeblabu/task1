const express = require('express')

const {createProduct,updateProduct,deleteProduct,getProduct,getCategories,
    getProducts}=require('./productController')
const app = express()

const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const sequelize = require('./util/database');
const ProductImg = require('./models/productImgs');
const Category = require('./models/categories');


app.post("/createProduct",createProduct)
app.put("/updateProduct",updateProduct)
app.delete("/deleteProduct",deleteProduct)
app.get("/getProduct/:productId",getProduct)



app.post("/getCategories",getCategories)
app.post("getProducts",getProducts)

ProductImg.belongsTo(Product,{constraints:true,onDelete:'CASCADE'})
Product.hasMany(ProductImg);
Category.belongsToMany(Product,{through:'productCategories'});
Product.belongsToMany(Category,{through:'productCategories'});
sequelize
// .sync({ force: true })
.sync()
app.listen(3000,()=>{
    console.log("ruuning on post 3000");
})