import React, { useEffect, useState } from "react";

import EmpGrid from "../directory/EmpGrid";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
    height: "50vh",
    margin: "1rem",
    background: "lightgrey",
  },
}));

const EmpDirectory = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.root}>
        <Typography variant="h4" align="center">
          Employee Directory
        </Typography>
          <Typography variant="body1" align="center">
            Use the context menus in the column headers to sort and filter results.
          </Typography>
        <EmpGrid />
      </Paper>
    </Container>
  );
};

export default EmpDirectory;
