const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(cors());

app.use(express.json());
app.use(require('./routes'));

//iniciando o BD
mongoose.connect('mongodb+srv://elnino:Drop626311@cluster0-qwhiu.mongodb.net/quiz?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



app.listen(3001);