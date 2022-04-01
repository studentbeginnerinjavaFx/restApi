const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()



const app = express();
app.use(express.json());

app.use(require("./routes"))

mongoose.connect('mongodb://localhost:27017/dbRestApi', { useNewUrlParser: true })
.then(()=>console.log('data base contected'))
.catch((err)=>console.log(err))
Port = process.env.PORT || 5000









app.listen(Port,()=>{
    console.log(`Server running on Port ${Port}`)
})