import mongoose, { Schema } from "mongoose";

const translationSchema = new Schema({
    ENGLISH: {
        type: String,
        required: true,
    },
    KONKANI: {
        type: String,
        required: true,
    }
})

export default mongoose.models.Translation || mongoose.model('Translation', translationSchema)