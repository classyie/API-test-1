import express from 'express';

export const Items = (req, res)=>{
    res.status(200).send("Items");
}
export const AddItem = (req, res)=>{
    res.status(200).send("Added");
}
export const RemoveItem = (req, res)=>{
    res.status(200).send("Removed");
}

export const UpdateItem = (req, res)=>{
    res.status(200).send("Updated");
}