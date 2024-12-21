const dotenv = require('dotenv');
dotenv.config();

const express=require('express');
const cookieParser = require('cookie-parser');
const Routes=require('../src/routes/index.routes');

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', Routes);

module.exports =app;