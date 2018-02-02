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

import photos from '../../db/data';

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
        id: { type: GraphQLID }
      },
      resolve(root, args) {
        return args.id
          ? photos.find(item => item.id === args.id)
          : photos.map(item => item);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
