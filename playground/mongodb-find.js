// const MongoClient = require(`mongodb`).MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);
 

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err , db) => {
    if (err) {
        return console.log(`Unable to connect to mongoDB server`);
    }
    console.log(`Connect to mongoDB server`);

    // db.collection(`Todos`).find({
    //     _id: new ObjectID(`5bbe431ccecb3f36902c44d7`)
    // }).toArray().then((docs) =>{
    //     console.log(`Todos`);
    //     console.log(JSON.stringify(docs,undefined,2));

        
    // }, (err) => {
    //     console.log(`Unable to fetch todos`, err);
    // });

    
    db.collection(`Users`).find({name: `Ori`}).count().then((count) => {
        console.log(`There are ${count} record with the name Ori`);
    },(err) => {
        console.log(`Error to get the data `, err);
    });

    db.close();

});