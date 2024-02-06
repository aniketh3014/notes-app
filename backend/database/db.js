import db from 'mongoose';

db.connect('mongodb+srv://admin:mypassword@cluster0.mcnh5ju.mongodb.net/note-app');

const userSchema = new db.Schema({
    usename: String,
    password: String
});

const noteSchema = new db.Schema({
    title: String,
    content: String,
})

const User = db.model('Users', userSchema);
const Note = db.model('Notes', noteSchema);

module.exports = {
    User,
    Note
}