const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

mongoose.connection.on("open", () => {
    console.log("Base de MONGO conectada");
})

mongoose.connection.on("error", () => {
    console.log("error al conectar a mongo");
})