import express from 'express';
import bookRouter from './routes/bookRoutes';

// process.env.NODE_ENV = 'development';

const port = 8081;
const app = express();

/* How to use static content */
// app.use(express.static('public'));

//Test Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/books', bookRouter);

/* eslint-disable no-console */
app.listen(port, (err) => {
  console.log('Express running server on port ' + port);
  if(err) {
    console.log(err);
  }
});
