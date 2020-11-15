import React from "react";
import { IntlProvider } from "react-intl";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import "./App.css";
import Layout from "./components/shared/Layout/Layout";
import Login from "./components/Login/Login";
import { en } from "./translations/index";


function App() {
  return (
    <IntlProvider messages={en} locale="en" defaultLocale="en">
      <Layout>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect to={"/login"} />
          </Switch>
        </Router>
      </Layout>
    </IntlProvider>
  );
}

export default App;
