import React from "react";
import TextField from "@mui/material/TextField";
// import List from "./Components/List"
import "./Search.css";

import SearchBar from "material-ui-search-bar";

function Search() {
  return (
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '30px auto',
        maxWidth: 400
      }}
    />
  );
}

export default Search;