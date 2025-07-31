require('dotenv').config();
const express = require('express');

const pool = require('./configs/db');
const errorHandler = require('./middlewares/errorHandler');
const userRoute = require('./routes/userRoute');

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app/use('api/users', userRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}`);
});
