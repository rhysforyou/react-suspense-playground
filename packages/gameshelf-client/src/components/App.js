import React from "react";
import { Router } from "@reach/router";
import lazyLoadComponent from "../lib/lazyLoadComponent";

const Header = lazyLoadComponent(() =>
  import("./Header").then(mod => mod.default)
);
const GamesList = lazyLoadComponent(() =>
  import("./GamesList").then(mod => mod.default)
);

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <GamesList path="/" />
        </Router>
      </>
    );
  }
}