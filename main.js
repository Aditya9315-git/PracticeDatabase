const express=require("express")
const app=express()
const env=require("dotenv")
let router= require('./Routes/UserRoute')

env.config({
    path:"./.env"
})

// Database
let db=require('./DatabaseConfig')
db()

app.use(express.json())

app.use('/api',router)

app.listen(process.env.Port,()=>{
    console.log(`Server is running ${process.env.Port}`)
})