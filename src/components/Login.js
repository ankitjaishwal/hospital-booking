import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Login(props) {
  const classes = useStyles();

  const { Reducer: data } = props;

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    type: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = () => {
    if (formData.type === "patient") {
      const newdata = data.patientData.filter(
        (data) =>
          formData.email === data.email &&
          formData.password === data.password &&
          formData.type === data.type
      );

      if (newdata.length > 0) {
        sessionStorage.setItem("email", newdata[0].email);
        sessionStorage.setItem("type", newdata[0].type);
        props.history.push("/booking");
      } else setOpen(true);
    }
    if (formData.type === "hospital") {
      const newdata = data.hospitalData.filter(
        (data) =>
          formData.email === data.email && formData.password === data.password
      );

      if (newdata.length > 0) {
        sessionStorage.setItem("email", newdata[0].email);
        sessionStorage.setItem("type", newdata[0].type);
        props.history.push("/admin");
      } else setOpen(true);
    }
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" color="primary">
              Welcome to Endimentional Hospital
            </Typography>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="patient"
                    control={<Radio />}
                    label="Patient Login"
                  />
                  <FormControlLabel
                    value="hospital"
                    control={<Radio />}
                    label="Hospital Login"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
                disabled={formData.email === "" || formData.password === ""}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Invalid Credentials!
        </Alert>
      </Snackbar>
    </>
  );
}
const mapStateToProps = (state) => ({
  Reducer: state.Reducer,
});
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Login);
