require('dotenv').config();
const express = require('express');

const pool = require('./configs/db');

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
