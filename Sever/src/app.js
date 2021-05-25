const express =require ('express')

const mongoose = require ('mongoose')
const cors =require ('cors')

const app = express ()
const port = 8888

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/web-ban-hang', function (err){
    if(err){
        console.log(`Cannot connect to mongodb:${err.toString()}`)
    }
})

app.get ('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})