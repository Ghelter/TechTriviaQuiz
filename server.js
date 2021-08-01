const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection')

const app = express();


dotenv.config( {path: 'config.env'} )
const PORT = process.env.PORT || 8080

//logs
app.use(morgan('tiny'));

//mongoDB Connection
connectDB();

//parse request to bodyparser
app.use(express.urlencoded( {extended: true}))
app.use(express.json());
// set view engine
app.set("view engine", "ejs")

//all ejs files in views
//app.set("views", path.resolve(__dirname, ""))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//loading routers
app.use('/', require('./server/routes/router'))


app.listen(PORT, ()=> {console.log(`server is running on http://localhost:${PORT}`)});