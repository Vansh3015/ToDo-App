// import express from "express";

// const PORT = process.env.PORT || 8000
// const connectDB = require("./config/db")
// const app = require('./app')

// app.listen(PORT,()=>{
//     console.log(`Server running on PORT ${PORT}`);
    
// })


const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to start server:', error);
});