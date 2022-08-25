import mongoose from "mongoose";
import conn from "../db.js";

conn()

const SubscribeSchema = new mongoose.Schema({
    email: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Subscribe = mongoose.model('subscriber', SubscribeSchema)

export {Subscribe}