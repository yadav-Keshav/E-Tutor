const app = require('./app.js');



// Handling uncaught Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
})
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT} `);
})

//Handling Unhandled Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Server is Closed Due to ${err.message}`);
    server.close();
    process.exit(1);
})