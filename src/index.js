import express from 'express';
import dotenv from 'dotenv';
import todoRoute from "./routes/todo.route.js";
// import bodyParser from 'body-parser';
import {dbconnect} from "./lib/db.js"
dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json());
// app.use(bodyParser.json());

app.use("/api", todoRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});