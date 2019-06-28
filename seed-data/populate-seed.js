const MongoClient = require('mongodb').MongoClient
  ,format = require('util').format
  ,Server = require('mongodb').Server;

const records = require('./people-5000.json');

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('directory');
  // Insert some documents
  collection.insertMany(records, function(err, result) {
    console.log(`Inserted ${records.length} documents into the collection`);
    callback(result);
  });
}

// Set up the connection to the local db
// var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'directory';


MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  console.log('Connected to ' + db);
  insertDocuments(db, function(result) {
    console.log(JSON.stringify(result));
    client.close();
  });
});


/*
// Open the connection to the server
mongoclient.open(function(err, mongoclient) {

  // Get the first db and do an update document on it
  var db = mongoclient.db("integration_tests");
  db.collection('directory').save(record, function(err, result) {
    mongoclient.close();
  });
});
*/
