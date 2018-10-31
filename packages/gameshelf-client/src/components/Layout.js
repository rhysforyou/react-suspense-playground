import React from "react";
import { Location } from "@reach/router";
import Header from "./Header";
import Spinner from "./Spinner";
import RouterErrorBoundary from "./RouterErrorBoundary";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <React.Suspense fallback={<Spinner />}>
        <Location>
          {({ location }) => (
            <RouterErrorBoundary key={location.key}>
              {children}
            </RouterErrorBoundary>
          )}
        </Location>
      </React.Suspense>
    </>
  );
}
