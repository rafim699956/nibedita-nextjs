const express = require("express");
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully! ✅");
    } catch (err) {
        console.error("Database connection failed! ❌", err.message);
        process.exit(1); 
    }
};
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
