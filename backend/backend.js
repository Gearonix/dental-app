import React from 'react';


const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json())
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true}).catch((err) => console.log(err));

app.listen(6868,() => console.log('server started'))