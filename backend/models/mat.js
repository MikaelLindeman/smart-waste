const mongoose = require("mongoose")

const MatSchema = new mongoose.Schema({
    mat: {
        type: String,
        required: true,
    },
    allerg: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    }
});

const MatModel = mongoose.model("ads", MatSchema)
module.exports = MatModel