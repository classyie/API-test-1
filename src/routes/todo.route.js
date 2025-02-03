import express from 'express';
import { AddItem, getItems, RemoveItem, UpdateItem } from '../contollers/todo.controller.js';

const router = express.Router();
router.get('/items', getItems);

router.post("/add",AddItem);

router.delete("/remove", RemoveItem);

router.put("/update", UpdateItem);


export default router;