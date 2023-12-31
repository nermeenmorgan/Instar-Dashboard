const express = require('express')
const mongoose = require('mongoose')
const morgan = require ('morgan')
const bodyParser = require('body-parser')
const app = express()
const AuthRoute = require ('./routes/Auth')
const ReviewRoute = require ('./routes/Review')
const PromotionRoutes = require('./routes/Promotion');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// cors for angular integration
// cors for angular integration
const cors = require('cors')
app.use(cors({origin: 'http://localhost:4200'}))
//::::::::::
mongoose
  .connect("mongodb://127.0.0.1:27017/instar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 9000

app.listen(PORT, ()=>{
    console.log(`server run on port ${PORT}`)
})

app.use('/api', AuthRoute)
app.use('/api', ReviewRoute)
app.use('/api', PromotionRoutes);
