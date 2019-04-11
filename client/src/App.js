import React, { Component } from 'react';
import './App.css';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import { createBrowserHistory } from "history";
//** Import file */
import indexRoutes from "./routes/index.js";
import HomePage from "./views/pages/Home/HomeContainer";

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {indexRoutes.map((prop, key) => {
            console.log('history:',prop);
            if (prop.path === '/') {
              return <Route exact path={prop.path} key={key} component={prop.component} />;
            }
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router>
    );
  }
}
export default App;


