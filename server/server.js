import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
// import schema from "./graphql/Schema/Schema";
import cors from "cors";
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean
} from "graphql/type";

// const myGraphQLSchema = schema;

const PORT = process.env.port || 8080;

const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Hardcoded data
const photos = [
  {
    id: "1",
    link: "http://via.placeholder.com/350x150",
    name: "Test image",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean porta tortor a diam maximus, ultrices fringilla dui
        varius. Sed egestas tortor quis mi laoreet pretium. I`
  },
  {
    id: "2",
    link: "http://via.placeholder.com/350x150",
    name: "Test image",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean porta tortor a diam maximus, ultrices fringilla dui
        varius. Sed egestas tortor quis mi laoreet pretium. I`
  }
];

// Photo element GraphQL Object Type
const PhotosType = new GraphQLObjectType({
  name: "photos",
  description: "Placeholder Photos array",
  fields: () => ({
    id: { type: GraphQLID },
    link: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  fields: {
    photos: {
      type: PhotosType,
      args: {
          id: {type: GraphQLID}
      },
      resolve(root, args) {
          return args.id
          ? photos.find(item => item.id === args.id)
          : photos.map(item => item)
      }
    }
  }
});

const myGraphQLSchema = new GraphQLSchema({
  query: RootQuery
});

// bodyParser is needed just for POST.
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.get(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
); // if you want GraphiQL enabled

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
