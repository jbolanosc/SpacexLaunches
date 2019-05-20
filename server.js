const express = require("express");
const graphqlHTTP = require("express-graphql");
const Schema =  require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
