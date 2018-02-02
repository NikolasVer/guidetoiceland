import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import GraphQLSchema from "./graphql/Schema/Schema";
import cors from "cors";

const PORT = process.env.port || 8080;

const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// bodyParser is needed just for POST.
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: GraphQLSchema })
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
