import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "flex",
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
        <Typography variant="h6" className={classes.title}>
          XYZ Hospital
        </Typography>
        <Typography variant="body1">
          {sessionStorage.getItem("email")}
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          <ExitToAppIcon />
          <Typography variant="h6">Logout</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
