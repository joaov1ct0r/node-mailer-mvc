let express = require('express');

let mongoose = require('mongoose');

let app = express();

let connection = mongoose.connect('mongodb://localhost:27013/nodeMailer');

let PORT = 3000;

app.listen(PORT, () => {
    console.log('Server running');
});
