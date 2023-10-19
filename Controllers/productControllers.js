const product=require("../Models/productModel")

exports.addProduct=async(req,res)=>{
try {
   const{name,description,photo,price}=req.body
   const newProduct= new product({name,description,photo,price})
await newProduct.save()
res.status(200).send({msg:"product added successfuly",newProduct})

} catch (error) {
    res.status(400).send({msg:"cannot add product",error})  // erreur client 
}
}


exports.getProducts=async(req,res)=>{   // appel tous les products
    try {
       const products= await product.find()
    res.status(200).send({msg:"product found successfuly",products})
    
    } catch (error) {
        res.status(500).send({msg:"error on getting all product",error})  // erreur client 
    }
    
    }

    
exports.getById=async(req,res)=>{   // appel par id 
    try {
        const {_id}=req.params  //  lien de id

       const products= await product.findById({_id})
       if(!products)
       {
        res.status(500).send({msg:"error non valide "})  // erreur client 
       }
       else 
       {
        res.status(200).send({msg:"product found successfuly",products})
       }
     } catch (error) {
        res.status(500).send({msg:"error on getting  product id",error})  // erreur client 
    }
    
    }

    exports.delecteProduct=async(req,res)=>{   // appel tous les products
        try {
            const {_id}=req.params  //  lien de id
             await product.findByIdAndDelete({_id})
             res.status(200).send({msg:"deleted successfuly"})

         } catch (error) {
            res.status(500).send({msg:"error on delete product",error})  // erreur client 
        }
        
        }

        exports.getByIdAndEdit =async(req,res)=>{
            try {
                const {_id}=req.params  //  lien de id
                const newProduct=req.body

          const products=  await product.updateOne({_id},{$set:newProduct})
          // product.getByIdAndEdit({_id},newProduct)   ou bien
            res.status(200).send({msg:"product updated successfuly",newProduct})
            
            } catch (error) {
                res.status(400).send({msg:"cannot add product",error})  // erreur client 
            }
            }