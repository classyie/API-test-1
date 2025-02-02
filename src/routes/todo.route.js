import express from 'express';
import { AddItem, Items, RemoveItem, UpdateItem } from '../contollers/todo.controller.js';

const router = express.Router();
router.get('/items', Items);

router.post("/add",AddItem);

router.delete("/remove", RemoveItem);

router.put("/update", UpdateItem);


export default router;