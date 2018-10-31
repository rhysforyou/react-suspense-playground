import React from "react";
import { Router } from "@reach/router";
import GameDetails from "./GameDetails";
import Spinner from "./Spinner";

const Header = React.lazy(() => import("./Header"));
const GamesList = React.lazy(() => import("./GamesList"));

export default class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />
        <React.Suspense fallback={<Spinner />}>
          <Router>
            <GamesList path="/" />
            <GameDetails path="/games/:gameId" />
          </Router>
        </React.Suspense>
      </React.Suspense>
    );
  }
}
