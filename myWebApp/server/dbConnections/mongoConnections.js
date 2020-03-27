var mongodb = require('mongodb');
// var config = require('../public/config');

var mongoConnectionString = "mongodb+srv://saurabh:mongo-123@first-cluster-exmam.mongodb.net/test?retryWrites=true&w=majority";
var dbName = "test"
var dbConn = mongodb.connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(connection => {
        console.log("Succesfully Connected to Mongodb");
        return Promise.resolve(connection.db(dbName));
    })
    .catch(error => {
        console.log("Error Connecting Mongodb now exiting");
        console.log(error);
        process.exit(1);
    })



const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://saurabh:mongo-123@first-cluster-exmam.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


module.exports = dbConn;
