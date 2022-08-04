const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const {dashboardSchema} = require("../schemas/dashboardsSchemas")

const usersSchema  = new Schema({
    _id: Number,
    username:  String,
    email:   String,
    password: String,
    dashboards: [dashboardSchema]
}, { _id: false , timestamps: true});

usersSchema.plugin(AutoIncrement);
///Este plugin hace que el ID automatico de mongodb pase a ser un numero entero autoincrementado

const User = mongoose.model('users', usersSchema);
module.exports = User;