const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  // create your user schema here.
  // username: required, unique and lowercase
  // password: required
  username: { type: String, required: true, unique: true, lowercase: true, },
  passwordHash: { type: String, required: true, },
});

UserSchema.pre('save', function(next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user
  const user = this;
  if (!user.isModified('passwordHash')) return next();
  bcrypt.hash(passwordHash, SALT_ROUNDS, (err, hash) => {
    if (err) return next(error);
    user.passwordHash = hash;
    next();
  });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  bcrypt.compare(plainTextPW, this.hashedPW, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// if you're really stuck with this at this point, you can reference this document.
// https://github.com/LambdaSchool/Auth-JWT/blob/master/models/index.js This is what we're going for here.

module.exports = mongoose.model('User', UserSchema);
