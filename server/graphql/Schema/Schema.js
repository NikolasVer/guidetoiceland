import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt
} from "graphql/type";

import getPhotos from '../../db/data';

// Photo element GraphQL Object Type
const PhotosType = new GraphQLObjectType({
  name: "photos",
  description: "Photos array",
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
      type: new GraphQLList(PhotosType),
      args: {
        count: { type: GraphQLInt },
        id: {type: GraphQLID}
      },
      resolve(root, args) {
        // return args.id
        //   ? photos.find(item => item.id === args.id)
        //   : photos;
        return getPhotos(args);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
