const express=require("express")
const { addMovie, getMovie, getById, delecteMovie, getByRate } = require("../Controllers/MovieController")

const router = express.Router()
//Add movie
router.post('/add_movie',addMovie)
// get all product

 router.get('/get_movie',getMovie)

 //  get product by id
 router.get('/get_byId/:_id',getById)   // _id de url de page

//Delete
 router.delete('/deletemovie/:_id',delecteMovie)

//getByID
router.get('/getByRate',getByRate)

 module.exports=router