import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import logo from "./logo.png";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Launches from "./components/launches/launches";
import Launch  from './components/launches/launch'

const client = new ApolloClient({
  uri: "/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
