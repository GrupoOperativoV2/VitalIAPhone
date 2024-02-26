import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    allergies: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "medico",
    },
}, {
    timestamps: true,
});

export default mongoose.model("Paciente", userSchema);
