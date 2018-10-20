const {ObjectID} = require(`mongodb`);
const {Todo} = require(`./../server/models/todo`);
const {User} = require(`./../server/models/user`);
const {mongoose} = require(`./../server/db/mongoose`);

// var id = '5bc6e0b3f425b20d7defcd3d';

// if (!ObjectID.isValid(id)) {
//     console.log(`Id not valid`);
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log(`Id not found`);
//     }
//     console.log(`todo `, todo);
// }).catch((e) => console.log(e));

const id = `5bc49e4bbb935ceb62b05139`;

User.findById(id).then((user)=> {
    if (!user) {
        console.log(`No user id match`);
    }
    console.log(user)
}).catch((e) => console.log(e));