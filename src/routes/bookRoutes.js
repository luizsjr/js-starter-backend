import books from './books';
import express from 'express';

const bookRouter = express.Router();

bookRouter.route('/')
.get((req, res) => {
    res.send(books);
  });

  bookRouter.route('/single')
.get((req, res) => {
    res.send('Hello Single Books!');
  });

export default bookRouter;
