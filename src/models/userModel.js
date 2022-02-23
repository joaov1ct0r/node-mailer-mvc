import mongoose from 'mongoose';

const { model, Schema } = mongoose;

let userSchema = Schema({
    nome: { type: String, required: true, minlength: 2, maxlength: 100 },
    email: { type: String, required: true, minlength: 9, maxlength: 100 }
});

export default model('User', userSchema);
