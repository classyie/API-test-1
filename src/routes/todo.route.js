import express from 'express';


const router = express.Router();
router.get('/', (req, res)=>{
    res.status(200).send("You are seeing HomePage");
});

router.post("/add", (req, res)=>{
    res.status(200).send("Todo added successfully");
});

router.put("/update", (req, res)=>{
    res.status(200).send("Todo updated successfully");
});


export default router;