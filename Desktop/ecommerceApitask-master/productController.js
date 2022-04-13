const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const { db } = require('./util/database');
const Category = require('./models/categories');

const createProduct=async(req,res)=>{
    //you can add the product details as you want
    // const {productName,price,category}=req.body
    //db code to store product 
    const name = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const category = req.body.category;
  req.Product.createProduct(
    { 
    title: name,
    price: price,
    imageUrl: imageUrl,
    description: description,
    category: category
  })
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.json(`Product Created`)
    })
}



const updateProduct=async(req,res)=>{
    //you can add the product details as you want
    const {productName,price,category}=req.body
    //db code to store product 
    let product=await Product.findOne({where:{name:productName}})
    .then(product=>{
        product.update({
            name:productName,
            price:price,
            category:category
        })
        .then(result=>{
            console.log(result);
            res.json(`Product Updated`)
        })
    })

}

const deleteProduct=async(req,res)=>{
    const {productId}=req.body;
    //db code to delete the product
    Product.findByPk(productId)
    .then(product=>{
        product.destroy()
        .then(result=>{
            console.log(result);
            res.json(`Product Deleted`)
        })
    })
}

const getProduct=async(req,res)=>{
    console.log(req.params.productId);
    //productId come from req.params.productId
    //api url will be like http://localhost:3000/getProduct/23432423
    Product.findByPk(req.params.productId).then(product=>{
        res.json(product)
    })

}

const getCategories=async(req,res)=>{
const {category}=req.body
//db code to fetch all product belong to this category the category can be subcategory too
Category.getCategories().then(categories=>{
    res.json(categories)
})
}

const getProducts=async(req,res)=>{
    //fetch all the products according to a filter  like alphabetic or price 
    Product.findAll({orderBy: 'price'}).then(products=>{
        res.json(products)
    });
    
}

module.exports={
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getCategories,
    getProducts
}