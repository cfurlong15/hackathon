const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String,
    genre: String,
    director: String,
}, {timestamps: true});

module.exports = mongoose.model('Movie', MovieSchema);