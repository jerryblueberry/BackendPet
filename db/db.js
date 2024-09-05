const mongoose = require('mongoose');
const CONNECTION = 'mongodb+srv://sajan2121089:sajank1818@cluster0.nvih7mc.mongodb.net/?retryWrites=true&w=majority'


const connectDb = async() => {
    try {
        const connect = await mongoose.connect(CONNECTION);
        console.log('Database connected')
    } catch (error) {
        console.log("error");
    }
}

module.exports = connectDb();