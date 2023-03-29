const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

connectToMongo().catch(err => console.log(err));

async function connectToMongo () {
    await mongoose.connect(mongoURI);
    console.log("Connected");
}
module.exports = connectToMongo;