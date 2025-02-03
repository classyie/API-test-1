import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Items = mongoose.model("Items", itemSchema);

export default Items;
