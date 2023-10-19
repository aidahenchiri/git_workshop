const mongoose= require("mongoose")
//create the schema

const schema=mongoose.Schema

const MovieSchema= new schema(
    {
        Title:{type:String , required:true},
        Descrption: {type:String},
        PostUrl:{type:String , required:true},
        Rate:{type:Number},
        Trailer:{type:String ,required:true}
    }
)
module.exports =mongoose.model("movieModel",MovieSchema)