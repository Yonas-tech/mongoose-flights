
// DEPENDENCIES:
const db = require('./config/database')
const Flights = require('./models/Flights');

// LOGIC OF CODE:
const myFirstFlight = {
    airline: "American",
    flightNo: 33,
    // departs: Date.now(),
}

// COMUNICATION TO DATABASE (ABOUT DATA): 
Flights.create(myFirstFlight).then((flight) =>{
    console.log(flight)
}).catch((error) =>{
    console.log(error)
}).finally(()=>{
    db.close()
})





