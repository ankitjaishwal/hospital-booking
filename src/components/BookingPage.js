import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BookIcon from "@material-ui/icons/Book";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Header from "./Header";

import { connect } from "react-redux";

import { bookSlot } from "../redux/ActionCreator";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
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
    marginTop: 12,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function BookingPage(props) {
  const classes = useStyles();

  const { Reducer: data, bookSlot } = props;

  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    mobile: "",
    address: "",
    date: "",
    time: "",
  });

  const [open, setOpen] = React.useState(false);
  const [openErr, setOpenErr] = React.useState(false);

  const [timeslot] = React.useState([
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
  ]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenErr(false);
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    var newData;
    var isAvailable = timeslot.some((time) => time == formData.time);
    var isExist = data.booked.some(
      (d) => d.time == formData.time && d.date == formData.date
    );
    if (isAvailable && !isExist) {
      newData = data.booked.concat(formData);
      setFormData({
        name: "",
        age: "",
        mobile: "",
        address: "",
        date: "",
        time: "",
      });
      bookSlot(newData);
      setOpen(true);
    } else setOpenErr(true);
  };

  return (
    <>
      <Header />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <BookIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Book Slot
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoFocus
              />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="age"
                    label="Age"
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="mobile"
                    label="Mobile"
                    type="number"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <TextField
                multiline
                rowsMax={3}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                autoFocus
              />
              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="date"
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    autoComplete="date"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="time"
                    type="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    autoComplete="time"
                    inputProps={{
                      step: 300,
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
                disabled={
                  formData.name === "" ||
                  formData.age === "" ||
                  formData.mobile === "" ||
                  formData.address === "" ||
                  formData.date === "" ||
                  formData.time === ""
                }
              >
                Book Now
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Booked Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Slot not available!
        </Alert>
      </Snackbar>
    </>
  );
}

const mapStateToProps = (state) => ({
  Reducer: state.Reducer,
});
const mapActionsToProps = { bookSlot };

export default connect(mapStateToProps, mapActionsToProps)(BookingPage);
