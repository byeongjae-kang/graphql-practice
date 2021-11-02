const graphql = require("graphql");
const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:4001/users/${args.id}`)
          .then((res) => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
