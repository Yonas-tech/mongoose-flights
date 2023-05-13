const mongoose = require('mongoose');

const schema = mongoose.Schema;
const model = mongoose.model;
const currentDate = new Date();

const flightsSchema = new schema({
    airline: {type: String, 
              enum :{values:['American','Southwest','United'],
                    message: '{VALUE} is not supported'}},    //, message: '{VALUE} is not supported'
    flightNo: {type: Number, 
                min: 10, 
                max: 9999, 
                required: true},
    departs: {type: Date, 
            default: currentDate.getFullYear()}
})

const Flight = model("Flight", flightsSchema);

module.exports = Flight;