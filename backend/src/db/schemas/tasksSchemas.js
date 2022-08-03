const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const tasksSchema  = new Schema({
    _id: Number,
    title:  String,
    description:   String,
    order: Number
});

tasksSchema.plugin(AutoIncrement, {id: 'taskId', inc_field: '_id'});
///Este plugin hace que el ID automatico de mongodb pase a ser un numero entero autoincrementado

const Task = mongoose.model('tasks', tasksSchema);
module.exports = {
    Task,
    tasksSchema 
};