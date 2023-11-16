import { useState } from "react";
import "./App.css";
import ButtonGroup from "./components/buttongroup";

function App() {
  const printButtonLabel = (event) => {
    console.log(event.target.name);
  };

  return (
    <>
      <div>
        <h1>CV Generator</h1>
        <div>
          <div>
            <button>Clear Resume</button>
            <button>Load Example</button>
          </div>
          <ButtonGroup
            buttons={["Content", "Customize", "Download"]}
            doSomethingAfterClick={printButtonLabel}
          />
          <div>
            <h4>Personal Details</h4>
          </div>
        </div>
        <div>Resume Changes Reflect Here</div>
      </div>
    </>
  );
}

export default App;
