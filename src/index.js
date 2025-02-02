import express from 'express';
import dotenv from 'dotenv';
import todoRoute from "./routes/todo.route.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json());

app.use("/api/todo", todoRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});


