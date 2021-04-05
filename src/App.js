import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import Login from "./components/Login";
import BookingPage from "./components/BookingPage";
import Hospital from "./components/Hospital";

const theme = createMuiTheme();

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/booking" component={BookingPage} />
              <Route exact path="/admin" component={Hospital} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
