const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const stagesRoutes = require("./routes/stagesRoutes");
const {sendError} = require("./utils/errorHandling")
const path = require('path')
const dotenv = require("dotenv").config({path: path.resolve(__dirname, "./config/config.env")});
const mongoDB = require("./db/mongoConnection");
const morgan = require('morgan');
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const passport = require("passport")
/* --------------- MIDDLEWARES ------*/
 
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_CONNECTION_STRING,
        ttl: 60
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { 
        secure: false
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: ["http://localhost:3000", "https://task-master-01.herokuapp.com"],
    credentials: true
}));
app.use(morgan('dev'))
app.use("/api/users", usersRoutes);
app.use("/api/tasks", tasksRoutes);
app.use("/api/stages", stagesRoutes);
app.use(sendError)

 /* -------------------------------- */

const PORT = process.env.PORT || process.env.SERVER_PORT
app.listen(PORT, (req, res) => {
    console.log(`serve iniciado correctamente en el puerto ${PORT}` )
})