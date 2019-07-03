
//: import the mongoose package

const mongoose = require('mongoose')

// create new jobSchema, with Schema constructor function
// schemas represent a collection in mongodb similar to a table in sql dbss
const jobSchema = mongoose.Schema({

//add title property, set to required
    title : {
        type: String,
        required: true
    },
// add description property, set to a string
    description : {
        type: String
    }

});

// export the model instance by passing jobSchema
// the model represents the document, which is similar to rows of records in mysql
module.exports = mongoose.model('job', jobSchema );