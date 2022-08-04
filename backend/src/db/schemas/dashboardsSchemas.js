const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const dashboardSchema  = new Schema({
    _id: Number,
    title:  String
});

dashboardSchema.plugin(AutoIncrement, {id: 'dashboardId', inc_field: '_id'});
///Este plugin hace que el ID automatico de mongodb pase a ser un numero entero autoincrementado

const Dashboard = mongoose.model('dashboard', dashboardSchema);
module.exports = {
    Dashboard,
    dashboardSchema
};