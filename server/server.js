const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const Controller = require('./controller');


const app = express();
app.use(cors());

const PORT = 3000;

app.use(express.json());

// app.use(express.static(path.resolve(__dirname, '../client')));

// app.get('/', Controller.load)


app.post('/post', Controller.createEntry, (req, res) => {
  console.log("4")
    res.status(200).json(res.locals);
  })


app.get('*', (req, res) => {
  res.status(404).send('Unknown Request');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}...`)
});

module.exports = app;