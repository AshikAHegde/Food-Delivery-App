const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hegdeashik13:Ashik@cluster0.xzwuh3b.mongodb.net/GoFoodDataBase?retryWrites=true&w=majority&appName=Cluster0"
//our database connection string

const mongodb_Connect = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }).then(async () => {
        console.log("Connected to MongoDB");

        const fetched_food_items = await mongoose.connection.db.collection("food_items"); // Fetching the collection named "food_items" same working with some changes as of calling the functions like find ,findOne by usermodel
        let data = await fetched_food_items.find({}).toArray();
        global.food_items = data;  // important
        // console.log(global.food_items);

        const fetched_food_cat = await mongoose.connection.db.collection("food_category");
        data = await fetched_food_cat.find({}).toArray();
        global.food_category = data;


    }).catch(err => {
        console.log("Error connecting to MongoDB:", err);
    });
}
module.exports = mongodb_Connect;

