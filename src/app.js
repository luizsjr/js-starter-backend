import express from 'express';

// process.env.NODE_ENV = 'development';

const port = 8081;
const app = express();

// app.use(express.static('public'));

app.get('/books', (req, res) => {
  res.send('Hello Books');
});

app.listen(port, (err) => {
  console.log('Express running server on port ' + port);
});
