import mongoClient from 'mongodb/lib/mongo_client';

const url = 'mongodb://localhost:27017';
const dbName = "booksApp"

function connect() {
  return new Promise( (resolve,reject) => {
    mongoClient.connect(url).then(client => {
      const db = client.db(dbName);
      resolve(db);
    });
  });
}

export default connect;
