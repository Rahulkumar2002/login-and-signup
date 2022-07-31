const { loginUser } = require("../controller/login.controller");
const registerUser = require("../controller/register.controller");


const router = require("express").Router() ; 

// register : 
router.post("/register" , registerUser) ; 

// login : 
router.post("/login" , loginUser) ; 

module.exports = router ; 