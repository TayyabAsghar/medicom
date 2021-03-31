import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  alert: {
    margin: theme.spacing(1, 0, 0),
    padding: ".8rem",
    borderRadius: "0.5rem",
  },
}));

function MessageBox(props) {
  const { type } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.alert}
      // Making the message box for both info & error
      style={{
        color: type === "danger" ? "#A02020" : "#2020A0",
        backgroundColor: type === "danger" ? "#FFE0E0" : "#E0E0FF",
      }}
    >
      {props.children}
    </div>
  );
}

export default MessageBox;
