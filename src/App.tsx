import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
//router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//pages
import HomePage from "./containers/HomePage";
import UserPage from "./containers/UserPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/user">
                <UserPage />
              </Route>
            </Switch>
          </Router>
          <br />
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
