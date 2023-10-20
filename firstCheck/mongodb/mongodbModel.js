const mongodb = require("mongoose");

// Create a Mongoose schema
const mySchema = new mongodb.Schema({
    date: {type: String,require:true},
    name: { type: String, required: true },
    collegeid: { type: String, required: true},
    permissions: { type: Number, required: true },
    cost_leave: { type: Number, required: true },
    no_of_ods: { type: Number, required: true },
});

// Create a Mongoose model
const Persons = mongodb.model('MyModel', mySchema);

module.exports= {Persons:Persons};