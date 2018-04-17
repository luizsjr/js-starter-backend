import express from 'express';
import mongodb from 'mongodb';

function getBookRouter(db) {
  const collection = db.collection('books');

  const bookRouter = express.Router();
  bookRouter.route('/').get((req, res) => {
    collection.find({}).toArray((err, docs) => {
      if (err) {
        res.error(err);
      } else {
        res.json(docs);
      }
    });
  });

  bookRouter.route('/:id').get((req, res) => {
    collection.findOne({_id:new mongodb.ObjectID(req.params.id)}).then( doc => {
      res.send(doc);
    });
  });
  return bookRouter;
}

export default getBookRouter;
