const mongoose = require("mongoose");
// eslint-disable-next-line no-unused-vars
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'cryptodotcom'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;