let express = require('express');

let mongoose = require('mongoose');

let app = express();

let PORT = 3000;

app.listen(PORT, () => {
    console.log('Server running');
});
