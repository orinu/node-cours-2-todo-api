// const MongoClient = require(`mongodb`).MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);
 

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err , db) => {
    if (err) {
        return console.log(`Unable to connect to mongoDB server`);
    }
    console.log(`Connect to mongoDB server`);

//     db.collection(`Todos`).findOneAndUpdate({
//         _id: new ObjectID(`5bc0da71d66e8b8671de57f0`)
//     },{ 
//         $set: {
//             completed: true
//         }
//     },
//     {
//        returnOriginal: false 
//     }).then((res)=> console.log(res), (err) => console.log(err));

    db.collection(`Users`).findOneAndUpdate({
        name: `Ori Nahum`
    }, {
        $set:{
            name: `Ori Nahum`
        },
        $inc: {
        age: 1
        }
    }, {returnOriginal: false}
    ).then((res)=> console.log(res), (err) => console.log(err));

    db.close();

});