const mongoose = require('mongoose');
const schema = mongoose.Schema;
const currentDate = new Date();// Now

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
        default: currentDate.setDate(currentDate.getDate() + 30).setHours(currentDate.getHours() +4) //currentDate + 30 days +4 hours 
    },
}
)


module.exports = destinationSchema;