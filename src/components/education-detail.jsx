import React, { useState } from "react";
import BasicDropdown from "./basic-dropdown";
import "../styles/education.css";

const items = [
  {
    id: 0,
    school: "london city university",
    degree: "bachelors in computer science",
    startDate: "",
    endDate: "",
    location: "new york city, us" 
  },
  {
    id: 1,
    school: "new york university",
    degree: "bachelors in computer science",
    startDate: "",
    endDate: "",
    location: "new york city, us" 
  },
];

const EducationForm = ({}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="form">
      <div className="title-dropdown">
        <span className="material-symbols-outlined grad-cap">school</span>
        <h2>Education</h2>
        <BasicDropdown
          showDropdown={showDropdown}
          setShowDropdown={() => setShowDropdown(!showDropdown)}
          items={items}
        />
      </div>
      <form className="flex-container hide">
        <label>Full name</label>
        <input name="full-name" type="text" />
        <label>Email</label>
        <input name="email" type="text" />
        <label>Phone number</label>
        <input name="phone-number" type="text" />
        <label>Address</label>
        <input name="address" type="text" />
      </form>
    </div>
  );
};

export default EducationForm;
