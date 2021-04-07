import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Store from "./redux/Store";

import Login from "./components/Login";
import BookingPage from "./components/BookingPage";
import Hospital from "./components/Hospital";

import { PatientRoute, HospitalRoute } from "./components/Routes";

const theme = createMuiTheme();

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Provider store={Store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <PatientRoute exact path="/booking" component={BookingPage} />
              <HospitalRoute exact path="/admin" component={Hospital} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
