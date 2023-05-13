require('dotenv').config()

// DEPENDENCIES:
const mongoose = require('mongoose');

// CONFIGURATIONS:
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;  

// CONNECT TO MONGO
mongoose.connect(mongoURI, {useNewURLParser: true, useUnifiedTopology: true});


// CONNECTION MESSAGES (OPTIONAL):
db.on("error", (err)=>console.log(err.message + " is mongod not running?"))

db.on("open", ()=>console.log("mongo connected"))

db.on("close", ()=>console.log("mongo disconnected"))

