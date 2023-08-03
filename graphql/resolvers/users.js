const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {validateRegisterInput} = require('../../util/validators')
const {UserInputError} = require('apollo-server');
const {SECRETKEY} = require('../../config')

module.exports = {
    Mutation: {
        async register(_, {registerInput : {username, email, password, confirmPassword}},) {
            //TODO: 
            //validate user data
            const {valid, errors} = validateRegisterInput(username, email, password, confirmPassword);
            if (!valid) {
                throw new UserInputError("Errors", {errors});
            }
            //confirm user doesn't already exit
            const user = await User.findOne( {username});
            if (user) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is taken'
                    }
                })
            }
            //hash password and create authentication token
            password = await bcrypt.hash(password, 12);
            
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, SECRETKEY, {expiresIn: '1h'});

            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
}