const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose')
//mongo password: X7q43IIq1eIhIyfv


const Post = require("./models/Post")
const {  MONGODB } = require('./config.js')
const typeDefs = require("./graphql/typeDefs")
const resolvers = require('./graphql/resolvers')



const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: ({req}) => ({req}) 
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(()=> {
        console.log("Connected to mongoDB")
        return server.listen({port: 5000})
    })
    .then( (res) => {
        console.log(`Server running at ${res.url}`)
    })

