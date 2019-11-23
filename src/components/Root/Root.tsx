import React from "react";
import { Route, Switch } from "react-router";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { RootProps } from "./types";
import { Home } from "../Home";

export const Root: React.FC<RootProps> = ({ store, history }) => (
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
