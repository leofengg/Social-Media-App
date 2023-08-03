const jwt = require('jsonwebtoken');
const {SECRETKEY} = require('../config');
const {AuthenticationError} = require('apollo-server');

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split('Bearer ')[1];

        if (token) {
            try {
                const user = jwt.verify(token, SECRETKEY);
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired Token');
            }
        } 

        throw new Error('Authentication token invalid');

    }

    throw new Error('Authorization header must be provided');
}