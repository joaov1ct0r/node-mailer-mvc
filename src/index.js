import 'dotenv/config';

import express from 'express';

import mongoose from 'mongoose';

import router from './routes/userRoutes.js';

import path from 'path';

import { fileURLToPath } from 'url';

import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

let app = express();

let connection = mongoose.connect(process.env.DB_ROUTE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

if (connection) {
    console.log('Mongoose conectado');
}

app.use('/api', express.json(), router);

app.use('/', express.static(path.join(__dirname, '/view')));

app.use('/send', express.static(path.join(__dirname, '/view/response')));

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
