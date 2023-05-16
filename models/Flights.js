// import destinationSchema from './destination';

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const model = mongoose.model;
const currentDate = new Date();// Now

let arlDate = currentDate.setHours(currentDate.getHours() +4)

const destinationSchema = new schema({
    airport: {
        type: String,
        enum: {
            values: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
            message: '{VALUE} is not supported'
        }
    },
    arrival: {
        type: Date,
        default: currentDate.setDate(currentDate.getDate() + 30) //currentDate + 30 days +4 hours 
    },
}
)



const flightsSchema = new schema({
    airline: {
        type: String,
        enum: {
            values: ['American', 'Southwest', 'United'],
            message: '{VALUE} is not supported'
        }
    },    //, message: '{VALUE} is not supported'
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
        validator: (value) => { value >= 10 && value <= 9999 },
        message: 'INVALID VALUE! Flight No. should be 10 to 9999.'
    },
    departs: {
        type: Date,
        default: currentDate.setDate(currentDate.getDate() + 30) //currentDate + 30 days 
    },
    airport: {
        type: String,
        enum: {
            values: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA', 'SAN'],
            message: '{VALUE} is not supported'
        }
    },
    destinations: destinationSchema,
},
    { timestamps: true }

)

const Flight = model("Flight", flightsSchema);

module.exports = Flight;