import React from "react";
import { Router } from "@reach/router";
import { Layout } from "./Layout";

const GameDetails = React.lazy(() => import("./GameDetails"));
const GamesList = React.lazy(() => import("./GamesList"));

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout path="/">
          <GamesList path="/" />
          <GameDetails path="/games/:gameId" />
        </Layout>
      </Router>
    );
  }
}
