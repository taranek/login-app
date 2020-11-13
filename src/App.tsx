import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    Redirect,
} from "react-router-dom";
import Layout from './components/shared/Layout/Layout';
import Login from "./components/Login/Login";

function App() {
  return (
      <Layout>
      <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Redirect to={"/login"}/>
        </Switch>
      </Router>
      </Layout>
  );
}

export default App;
