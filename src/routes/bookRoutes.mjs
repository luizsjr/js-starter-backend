import books from '../data/books';
import express from 'express';

const bookRouter = express.Router();

bookRouter.route('/')
  .get((req, res) => {
    res.send(books);
  });

bookRouter.route('/:id')
  .get((req, res) => {
    res.send(books[req.params.id]);
  });

export default bookRouter;
