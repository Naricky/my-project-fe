import React, { useEffect, useState } from "react";
import logo from "./commit-logo.png";
import "./App.css";
import "./components/Info";
import InfoPanel from "./components/Info";
import DropdownComp from "./components/select"
import { Button } from 'semantic-ui-react'
import axios from 'axios'


// Set config based on the environment variable the build was run under.
let config = {};
if (process.env.NODE_ENV === "production") {
  config = require("./config/production.json");
} else if (process.env.NODE_ENV === "staging") {
  config = require("./config/staging.json");
} else {
  config = require("./config/development.json");
}





function App() {
  
  const [devOps, setDevOps] = useState({value: 1})
  const [fe, setFe] = useState({value: 1})
  const [be, setBe] = useState({value: 1})

  const handleClick  = () => {
    axios({
      method: 'post',
      url: `${config.backendURL}/analysis`,
      headers: {}, 
      data: {
        devOpsScore: devOps,
        feScore: fe,
        beScore: be
      }
    });
  }
  const ButtonExampleEmphasis = () => (
    <div>
      <Button primary onClick={handleClick}>Matching Company</Button>
    </div>
  ) 
  
  
  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>zero</h1>
        
    <div className="select_dropdown"><DropdownComp setDevOps={setDevOps} setFe={setFe} setBe={setBe}/></div>
    <ButtonExampleEmphasis></ButtonExampleEmphasis>
    </div>
  );
}

export default App;

