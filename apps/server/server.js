require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const cloudApi = require('./cloudApi');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json())


app.get('/', (req, res) => res.json('App is running!'));

app.post('/', (req, res) => cloudApi.quickstart(req, res));

app.listen(process.env.PORT || 5001, () => console.log('server running on 5001'));