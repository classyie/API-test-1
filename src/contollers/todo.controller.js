import express from 'express';
import Items from '../models/items.model.js';
export const getItems = async (req, res) => {
    try {
        const items = await Items.find();
        res.status(200).json(items); // ✅ Send items
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" }); // ✅ Send error response
    }
};
export const AddItem = async (req, res) => {
    const { item } = req.body;

    try {
        if (!item) {
            return res.status(400).json({ error: "Item is required" });
        }
        const newItem = new Items({ item });
        await newItem.save();

        res.status(201).json(newItem);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const RemoveItem = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        return res.status(400).json({ error: "Id is required" });
    }
    await Items.findByIdAndDelete(_id);
    
    res.status(200).send("Removed");
}

export const UpdateItem = (req, res) => {
    res.status(200).send("Updated");
}