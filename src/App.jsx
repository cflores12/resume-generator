import { useState } from "react";
import "./App.css";
import ButtonGroup from "./components/buttongroup";
import PersonalForm from "./components/personal-detail";
import EducationForm from "./components/education-detail";
import ExperienceForm from "./components/experience-detail";

function App() {
  const printButtonLabel = (event) => {
    console.log(event.target.name);
  };

  return (
    <>
      <div>
        <div className="main">
          <div className="side-buttons">
            <ButtonGroup
              buttons={["Content", "Customize", "Download"]}
              doSomethingAfterClick={printButtonLabel}
            />
          </div>
          <div className="form-and-buttons">
            <div className="buttons">
            <button>Clear Resume</button>
            <button>Load Example</button>
            </div>
            <div className="space"></div>
            <PersonalForm />
            <div className="space"></div>
            <EducationForm />
            <div className="space"></div>
            <ExperienceForm />
          </div>
          <div className="resume">Resume Changes Reflect Here</div>
        </div>
      </div>
    </>
  );
}

export default App;
