// const MongoClient = require(`mongodb`).MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);
 

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err , db) => {
    if (err) {
        return console.log(`Unable to connect to mongoDB server`);
    }
    console.log(`Connect to mongoDB server`);

    // DelteMany
    // db.collection(`Todos`).deleteMany({text: `Eat lunch`}).then((res) => {
    //     console.log(res);
    // });

    // // DeleteOne
    // db.collection(`Todos`).deleteOne({name: `Eat lunch`}).then((res) => {
    //    console.log (res.result);
    // });

    // FindOneAndDelete
    // db.collection(`Todos`).findOneAndDelete({completed: false}).then((res) => console.log(res));

    // Delete all the duplicated records
    // db.collection(`Todos`).deleteMany({text: `Eat lunch`}).then((res)=> console.log(res));
    db.collection(`Todos`).findOneAndDelete({_id: ObjectID(`5bc05c23d66e8b8671de5022`)}).then((res)=> console.log(res));
    


    db.close();

});