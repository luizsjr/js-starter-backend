import express from 'express';
import booksData from '../data/books';

function getAdminRouter(db) {

  const adminRouter = express.Router();
  const collection = db.collection('books');

  adminRouter.route('/loadBooks').get( (req, res) => {
    collection.insertMany(booksData).then(results => {
      res.json(results);
    });
  });
  adminRouter.route('/deleteBooks').get( (req, res) => {
    collection.deleteMany().then ( results => {
      res.send(`${results.result.n} books deleted!`);
    });
  });

  return adminRouter;
}

function loadBooks(collection) {
}

export default getAdminRouter;
