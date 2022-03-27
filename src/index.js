import 'dotenv/config';

import express from 'express';

import userRouter from './routes/userRoutes.js';

import dbConnection from './config/db.js';

import path from 'path';

import { fileURLToPath } from 'url';

import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

let app = express();

dbConnection();

app.use('/api', express.json(), userRouter);

app.use('/', express.static(path.join(__dirname, '/view')));

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
