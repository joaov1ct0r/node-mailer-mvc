let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    nome: { type: String, required: true, minlength: 2, maxlength: 100 },
    email: { type: String, required: true, minlength: 9, maxlength: 100 }
});

module.exports = mongoose.model('User', userSchema);
