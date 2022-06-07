const app = require('./app.js');
const { PORT } = require('../backend/config/config');
const connectDB = require('../backend/config/connectDb');

// Handling uncaught Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
})

//Connecting to database
connectDB();

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT} `);
})

//Handling Unhandled Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Server is Closed Due to ${err.message}`);
    server.close();
    process.exit(1);
})