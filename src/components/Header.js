import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import logo from "../assets/images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "flex",
    marginLeft: 10,
  },
}));

function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.removeItem("email");
    history.push("/");
  };

  return (
    <AppBar position="static" position="fixed">
      <Toolbar>
        <img src={logo} style={{ height: 40, weight: 40, borderRadius: 20 }} />
        <Typography variant="h6" className={classes.title}>
          Endimentional Hospital
        </Typography>
        <Typography variant="body1" style={{ marginRight: 30 }}>
          {sessionStorage.getItem("email")}
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          <ExitToAppIcon />
          <Typography variant="h7">Logout</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
