const mongoose = require('mongoose');

function connectToDb() {
    const connectionString = 'mongodb+srv://vasamsettiabhi13:abhishek13@cluster0.nktwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    
    mongoose.connect(connectionString)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch(err => console.log(err));
}

module.exports = connectToDb;