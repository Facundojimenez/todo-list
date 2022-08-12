const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const {tasksSchema} = require("./tasksSchemas")

const stageSchema  = new Schema({
    _id: Number,
    title:  String,
    dashboardId: {
        type: Number,
        required: true
    },
    order: Number,
    tasks: [tasksSchema]
}, {timestamps: true});

stageSchema.plugin(AutoIncrement, {id: 'stageId', inc_field: '_id'});
///Este plugin hace que el ID automatico de mongodb pase a ser un numero entero autoincrementado

const Stage = mongoose.model('stage', stageSchema);
module.exports = {
    Stage,
    stageSchema
};