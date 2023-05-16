
// DEPENDENCIES:
const db = require('./config/database')
const Flights = require('./models/Flights');
const express = require('express');
const app = express();
const jsxViewEngine = require('jsx-view-engine');
const port = process.env.PORT || 8080;


// LOGIC OF CODE:
// const myFirstFlight = {
//     airline: "American",
//     flightNo: 336,
//     // departs: Date.now(),
// }

// COMUNICATION TO DATABASE (ABOUT DATA): 
// Flights.create(myFirstFlight).then((flight) =>{
//     console.log(flight)
// }).catch((error) =>{
//     console.log(error)
// })
// .finally(()=>{
//     db.close()
// })


// MIDDLEWARE
app.use((req,res,next)=>{
    next();
})
app.use(express.urlencoded({extended:false})); 

// JSX view engine:
app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine.createEngine());


// Routes:
app.get('/', (req,res)=>{
    res.send(`<h1>Welcome to your Flight APP</h1>`)
})
//     const defaultDepDate = this.props.departDate;
//     const defaultAriDate = this.props.departDate;
//     const fromAirports = this.props.fromAirports;
//     const toAirports = this.props.toAirports;

app.get('/flights/new', (req, res) =>{
    const newFlight = new Flights();
    const dt = newFlight.departs;
    const at = dt; //newFlight.destinations.arrival;
    const arrivalDate = at.toISOString().slice(0, 16);
    const departDate = dt.toISOString().slice(0, 16);

    console.log(Flights.schema.path('airport').schema.path('type').enumValues)

    console.log(dt)
    res.render('New', {departDate: departDate, 
                        arrivalDate:arrivalDate, 
                        toAirports: newFlight.destinations?.airport?.enumValues,
                        fromAirports: newFlight?.airport?.enumValues,
                        airlines: newFlight?.airline?.enumValues,
                     })
})

app.get('/flights', (req,res)=>{
    Flights.find({}, (error, allFlights)=>{
        res.render('Index', {flights: allFlights})
    })
})

app.post('/flights', async(req,res)=>{
    // const newFlight = await new Flights(req.body);

    // let errorMessage='';
    // const valid = await new Promise((resolve) => {
    //     newFlight.validate((err) => {
    //         if (err) {
    //             console.log('ERROR:', err)
    //             errorMessage = err;
    //             resolve(false)
    //         } else {
    //             resolve(true)
    //         }
    //     })
    // })

    // if (valid) {
    //     await newFlight.save()
    //     console.log('Saved the new flight')
    //     res.redirect('/flights');
    // }

    // else{
    //     const startIdx = JSON.stringify(errorMessage).indexOf('Path')+4;
    //     const endIdx = JSON.stringify(errorMessage).indexOf('.');
    //     app.send('New', alert(errorMessage.slice(startIdx,endIdx)));
        
    // }

    app.get('/api', (req,res) => {
        var FlightList = ["item1", "item2", "item3"];
        res.json(FlightList);
        console.log('Sent list of items');
    });
    

    Flights.create(req.body, (error, createdFlight)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("New flight created")
        }
        res.redirect('/flights')
    })
})



app.listen(port, () =>{
    console.log(`Server is listening on port${port}`)
})