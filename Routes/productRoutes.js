const express=require("express")
const { addProduct, getProducts, getByIdAndEdit, getById, delecteProduct } = require("../Controllers/productControllers")

// require router
const router = express.Router()
 // add new product
 router.post('/add_product',addProduct)
// get all product

 router.get('/get_products',getProducts)

 //  get product by id
 router.get('/get_byId/:_id',getById)   // _id de url de page
// delete

 router.delete('/deleteproduct/:_id',delecteProduct)

// get by id and edit put: modification 
 router.put('/edit_product/:_id',getByIdAndEdit)

 module.exports=router