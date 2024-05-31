import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [state,setState]=useState(false);
  function showPara(){
    setState(true);

  }

  return (
    <div className="App" id="main">
      <p className={state?"show":"hide"} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
     {
      (!state)&&(<button onClick={showPara} id="click">Get Paragraph</button>)
     }
     
    </div>
  );
}

export default App
