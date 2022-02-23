import express from 'express';

import { connect } from 'mongoose';

import router from './routes/userRoutes';

let app = express();

let connection = connect('mongodb://localhost:27013/nodeMailer');

if (connection) {
    console.log('Mongoose conectado');
}

app.use('/api', router);

let PORT = 3000;

app.listen(PORT, () => {
    console.log('Server running');
});
