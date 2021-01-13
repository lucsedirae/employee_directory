import React, { useEffect, useState } from "react";

import EmpGrid from "../directory/EmpGrid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
    height: "30rem",
    margin: "1rem"
  },
}));

const EmpDirectory = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <EmpGrid />
    </Paper>
  );
};

export default EmpDirectory;
