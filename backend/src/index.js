const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes")
const path = require('path')
const dotenv = require("dotenv").config({path: path.resolve(__dirname, "./config/config.env")});
const mongoDB = require("./db/mongoConnection");
const morgan = require('morgan')

const cors = require("cors");

/* --------------- MIDDLEWARES ------*/
 
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
 app.use("/api/users", usersRoutes);
 
 /* -------------------------------- */


app.listen(process.env.SERVER_PORT, (req, res) => {
    console.log(`serve iniciado correctamente en el puerto ${process.env.SERVER_PORT}` )
})