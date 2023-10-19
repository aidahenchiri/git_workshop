const express=require("express")
const auth = require('../Middelwar/auth');

const { register, login, deleteUser, favorisMovie } = require("../Controllers/userController")
const { registerValidation, Validator } = require("../Middelwar/validator")
// require router
const router = express.Router()

 // add new product
 router.post('/register',registerValidation(),Validator,register)
// login
router.post('/login',login)
// login
router.delete('/deleteUser/:_id',deleteUser)
// current

router.get('/current',auth,(req,res)=>{res.send(req.user)})

//push movie
router.post('/favoris/:userId',favorisMovie)

module.exports=router