import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";

import Header from "./Header";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "5vh",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Hospital(props) {
  const classes = useStyles();
  const { Reducer: data } = props;
  return (
    <>
      <Header />
      <Typography variant="h5" component="h2" style={{ marginTop: "12vh" }}>
        Patient Details
      </Typography>
      <Grid container spacing={2}>
        {data.booked.map((book) => (
          <Grid item xs>
            <Card className={classes.root} style={{ border: "1px solid blue" }}>
              <CardContent>
                <Typography align="left">
                  <b>Name : </b>
                  {book.name}
                </Typography>
                <Typography align="left">
                  <b>Age : </b>
                  {book.age}
                </Typography>
                <Typography align="left">
                  <b>Mobile :</b>
                  {book.mobile}
                </Typography>
                <Typography align="left">
                  <b>Address :</b>
                  {book.address}
                </Typography>
                <Typography align="left">
                  <b>Date :</b>
                  {book.date}
                </Typography>
                <Typography align="left">
                  <b>Time :</b>
                  {book.time}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => ({
  Reducer: state.Reducer,
});
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Hospital);
