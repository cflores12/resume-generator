import { useState } from "react";
import "./App.css";
import ButtonGroup from "./components/buttongroup";
import PersonalForm from "./components/personal-detail";

function App() {
  const printButtonLabel = (event) => {
    console.log(event.target.name);
  };

  return (
    <>
      <div>
        <div>
          <button>Clear Resume</button>
          <button>Load Example</button>
        </div>
        <div className="main">
          <div className="side-buttons">
            <ButtonGroup
              buttons={["Content", "Customize", "Download"]}
              doSomethingAfterClick={printButtonLabel}
            />
          </div>
          <PersonalForm />
          <div className="resume">Resume Changes Reflect Here</div>
        </div>
      </div>
    </>
  );
}

export default App;
