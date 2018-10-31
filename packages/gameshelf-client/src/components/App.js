import React from "react";
import { Router } from "@reach/router";
import lazyLoadComponent from "../lib/lazyLoadComponent";
import GameDetails from "./GameDetails";
import Spinner from "./Spinner";

const Header = React.lazy(() => import("./Header"));
const GamesList = React.lazy(() => import("./GamesList"));

export default class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />
        <Router>
          <GamesList path="/" />
          <GameDetails path="/games/:gameId" />
        </Router>
      </React.Suspense>
    );
  }
}
