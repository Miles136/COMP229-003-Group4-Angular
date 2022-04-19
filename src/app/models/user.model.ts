// let mongoose = require('mongoose');
// let crypto = require('crypto');

// // Create a model class
// let UserModel = mongoose.Schema(
//     {
//         firstname: String,
//         lastname: String,
//         email: {
//             type: String, 
//             match: [/.+\@.+\..+/, "Please type the correct e-mail address"]
//         },
//         username: {
//             type: String,
//             unique: true,
//             required: 'Username is mandatory',
//             trim: true
//         },
//         password: {
//             type: String,
//             validate: [(password) => {
//                 return password && password.length > 6;
//             }, 'Password needs to be longer']
//         },
//         //use salt to store the result of the encryption
//         salt: String,
//         created: {
//             type: Date,
//             default: Date.now
//         }
//     },

//     {
//         collection: "user"
//     }
// );

// UserModel.virtual('fullname')
//     .get(function() {
//         return this.firstname + ' ' + this.lastname;
//     })
//     .set(function(fullname) {
//         let splitname = fullname.split(' ');
//         this.firstname = splitname[0] || '';
//         this.lastname = splitname[1] || '';
// });
// // functions for encrypting the password
// // Middleware pre
// UserModel.pre('save', function(next) {
//     if (this.password) {
//         this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
//         this.password = this.hashPassword(this.password);
//     }
//     next();
// });

// // Middleware post
// UserModel.post('save', function(next){
//     console.log('The user "' + this.username +  '" details were saved.');
// });

// UserModel.methods.hashPassword = function(password) {
//     return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
// };

// UserModel.methods.authenticate = function(password) {
//     return this.password === this.hashPassword(password);
// };

// module.exports = mongoose.model('user', UserModel);

export class User {

    constructor(
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public username?: string,
        public password?: string,
        public confirm?: string,
    ){}
    
}