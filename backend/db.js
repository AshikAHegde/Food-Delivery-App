const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hegdeashik13:Ashik@cluster0.xzwuh3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongodb_Connect = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
        console.log("Connected to MongoDB");

    }).catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = mongodb_Connect;
