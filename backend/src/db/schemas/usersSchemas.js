const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const usersSchema  = new Schema({
    _id: Number,
    username:  String,
    email:   String,
    password: String
}, { _id: false , timestamps: true});

usersSchema.plugin(AutoIncrement);
///Este plugin hace que el ID automatico de mongodb pase a ser un numero entero autoincrementado

const User = mongoose.model('users', usersSchema);
module.exports = User;