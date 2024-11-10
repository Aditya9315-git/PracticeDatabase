const express=require('express')
const { Usersave, Userlog } = require('../Controller/Usercontroller')
const route=express.Router()

route.post('/Usersave',Usersave)
route.post('/Userlog',Userlog)


module.exports= route