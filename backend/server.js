const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Port = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', require('./routes/index'));

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        server.listen(Port, ()=>{
            console.log(`server started at port ${Port}`);
        }) 
    }).catch(err =>{
        console.log('Database connection failed');
        console.error(err);
    })