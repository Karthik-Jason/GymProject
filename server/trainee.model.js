const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Trainee = new Schema({
    trainee_name: {
        type: String,
        required: true
    },
    trainee_address: {
        type: String,
        required: true
    },
    trainee_fee: {
        type: Number,
        required: true
    },
    trainee_paidon : {
        type: Date,
        required: true
    },
    trainee_joined : {
        type: Date, 
        required: true
    },
    trainee_aadhar : {
        type: Number, 
        required: true
    }

})

module.exports = mongoose.model('Trainee', Trainee)