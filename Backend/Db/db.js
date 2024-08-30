const dbConfig = {
    dbURL: "mongodb+srv://kranthikumarsunki:kranthikumarsunki@cluster0.02f1tlq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
};

module.exports = dbConfig;


const mongoose = require('mongoose');
const { dbURL } = require('./config');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = {
    connectToDatabase,
};