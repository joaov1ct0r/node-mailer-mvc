import 'dotenv/config';

import express from 'express';

import mongoose from 'mongoose';

import router from './routes/userRoutes.js';

import path from 'path';

let app = express();

let connection = mongoose.connect(process.env.DB_ROUTE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

if (connection) {
    console.log('Mongoose conectado');
}

app.use('/api', express.json(), router);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
