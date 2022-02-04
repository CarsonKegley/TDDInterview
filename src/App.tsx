import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { encypher } from "./Helper";





function App() {

  
  const [inputValue, setInputValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");
  function handleClick(value:string) {
    setDisplayValue(encypher(value));
  }

  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="App-body">
        <h1>Cypher Input</h1>
        
        <TextField id="standard-basic" label="Standard" variant="standard" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#0a2342",  margin: "30px" }}
          onClick={() => {handleClick(inputValue)}}
          type="submit"
        >
          Generate
        </Button>
        
        <h1>{displayValue}</h1>
      </div>
    </div>
  );
}

export default App;
