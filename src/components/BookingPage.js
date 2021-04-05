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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [value, setValue] = React.useState("patient");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
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
              autoComplete="name"
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
                  autoComplete="age"
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
                  autoComplete="mobile"
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
              autoComplete="address"
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
                  autoComplete="time"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Book Now
            </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
