import mongoose, { Schema } from "mongoose";


const dataSchema = new Schema({
    text: {
        type: String,
    },
}, {
    timestamps: true
});

export const Data = mongoose.model("Data", dataSchema)

