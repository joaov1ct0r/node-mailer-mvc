import 'dotenv/config';

import express from 'express';

import mongoose from 'mongoose';

import router from './routes/userRoutes.js';

let app = express();

let connection = mongoose.connect('mongodb://localhost:27017/nodeMailer', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

if (connection) {
    console.log('Mongoose conectado');
}

app.use('/api', express.json(), router);

let PORT = 3000;

app.listen(PORT, () => {
    console.log('Server running');
});
