const movieModel=require("../Models/MovieModel")
 //add movie
exports.addMovie=async(req,res)=>{
try {
   const{Title,Descrption,PostUrl,Rate,Trailer}=req.body
   const newMovie= new movieModel({Title,Descrption,PostUrl,Rate,Trailer})
await newMovie.save()
const movies= await movieModel.find()
res.status(200).send({msg:"the Movie has been added successfuly",movies})

} catch (error) {
    res.status(400).send({msg:"cannot add the Movie",error})  // erreur client 
}
}
//get movie
exports.getMovie=async(req,res)=>{   // appel tous les movies
    try {
       const movie= await movieModel.find()
    res.status(200).send({msg:"movieModel found successfuly",movie})
    
    } catch (error) {
        res.status(500).send({msg:"error on getting the movieModel",error})  // erreur client 
    }
    
    }

//get by id
exports.getById=async(req,res)=>{   // appel par id 
    try {
        const {_id}=req.params  //  lien de id

       const movie= await movieModel.findById({_id})
       if(!movie)
       {
        res.status(500).send({msg:"error non valide "})  // erreur client 
       }
       else 
       {
        res.status(200).send({msg:"Movie found successfuly",movie})
       }
     } catch (error) {
        res.status(500).send({msg:"error on getting  product id",error})  // erreur client 
    }}

    // Delete
    exports.delecteMovie=async(req,res)=>{   // appel tous les products
    try {
        const {_id}=req.params  //  lien de id
         await movieModel.findByIdAndDelete({_id})
         res.status(200).send({msg:"deleted successfuly"})

     } catch (error) {
        res.status(500).send({msg:"error on delete movie",error})  // erreur client 
    }
    
    }
//get by id
exports.getByRate=async(req,res)=>{   // appel par id 
    try {
        const  {Title,Rate} =req.body

       const movie= await movieModel.findOne({Rate,Title})
       if(!movie)
       {
        res.status(500).send({msg:"error non valide  "})  // erreur client 
       }
       else 
       {
        res.status(200).send({msg:"Movie found successfuly",movie})
       }
     } catch (error) {
        res.status(500).send({msg:"error on getting  movie ",error})  // erreur client 
    }}