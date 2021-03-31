import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({}));

function SearchBox(props) {
  const classes = useStyles();
  const [name, setName] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    if (name !== "") props.history.push(`/search/name/${name}`);
  };

  return (
    <div>
      <Button
        type="submit"
        variant="outlined"
        style={{ backgroundColor: "#00B7A6", height: 45, marginBottom: "5px" }}
        startIcon={<SearchIcon size="large" style={{ color: "white" }} />}
        onClick={submitSearch}
      />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search"
        onChange={(e) => setName(e.target.value)}
        style={{
          backgroundColor: "white",
          height: 45,
          marginBottom: "5px",
          fontFamily: "Inter",
          fontSize: "18px",
        }}
      />
    </div>
  );
}

export default SearchBox;
