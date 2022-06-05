const express=require('express')
const app=express()
const index_routes=require('./routes/index_routes')
const users_routes=require('./routes/users_routes')
const mongoose=require('mongoose')
const cors = require('cors');

mongoose.connect('mongodb://localhost/users',{
    useNewUrlParser: true,
  useUnifiedTopology: true
})


app.use(express.json())
app.use(cors({
  origin: '*'
}));

index_routes(app)
users_routes(app)

app.use((err, req, res, next)=>{
  // console.log(err.message);
  res.status(422).send({error: err.message})
})
module.exports = app;
