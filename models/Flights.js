const mongoose = require('mongoose');

const schema = mongoose.Schema;
const model = mongoose.model;

const flightsSchema = new schema({
    airline: {type: String, 
              enum :{value: ["American","Southwest","United"], 
                        message: '{VALUE} is not supported'}},
    flightNo: {type: Number, 
                min: 10, 
                max: 9999, 
                required: true},
    departs: {type: Date, 
            default: Date.now().getFullYear()}
})

const Flight = model("Flight", flightsSchema);

module.exports = Flight;