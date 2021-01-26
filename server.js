var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Initialize a GraphQL schema 
var schema = buildSchema(`
  type Query { hello: String }`
  );

// Root resolver 
var root = {
  hello: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqpHTTP({
  schema: schema, // Must be provided
  rootValue: root,
  graphql: true, // Enable GraphQL when server endpoint is accessed in browser
}));
app.listen(4000, () => console.log('Noew browse to localhost:4000/graphql'));

// The above snippet uses require to include the packages that were installed. 
// It also initializes generic schema and root values.
// It creates an endpoint at /graphql which can be visited with a browser