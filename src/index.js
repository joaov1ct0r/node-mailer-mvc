import express from 'express';

import { connect } from 'mongoose';

let app = express();

let connection = connect('mongodb://localhost:27013/nodeMailer');

if (connection) {
    console.log('Mongoose conectado');
}

let PORT = 3000;

app.listen(PORT, () => {
    console.log('Server running');
});
