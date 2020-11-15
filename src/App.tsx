import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { IntlProvider } from "react-intl";
import createSagaMiddleware from "redux-saga";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute'
import { default as users } from "./redux/users/usersReducer";
import { default as auth } from "./redux/auth/authReducer";
import Layout from "./components/shared/Layout/Layout";
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import { en } from "./translations/index";
import rootSaga from "redux/rootSaga";
import './App.css'


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ users, auth });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


function App() {
  return (
    <Router>
      <IntlProvider messages={en} locale="en" defaultLocale="en">
        <Provider store={store}>
          <Layout>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <ProtectedRoute fallback={'/login'} targetRoute={'/users'} >
                <Users />
              </ProtectedRoute>
            </Switch>
          </Layout>
        </Provider>
      </IntlProvider>
    </Router>
  );
}
export type AppState = ReturnType<typeof rootReducer>;

export default App;
