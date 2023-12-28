import React, { useState } from "react";
import BasicDropdown from "./basic-dropdown";
import "../styles/education.css";

const items = [{
  id: 0,
  companyName: "Umbrella Inc.",
  positionTitle: "UX & UI Designer",
  startDate: "",
  endDate: "",
  location: "",
  description: "some long text"
}, {
  id: 1,
  companyName: "Umbrella Inc.",
  positionTitle: "UX & UI Designer",
  startDate: "",
  endDate: "",
  location: "",
  description: "some long text"
},
];

const ExperienceForm = ({}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="form">
      <div className="title-dropdown">
      <span class="material-symbols-outlined exp-icon">business_center</span>
        <h2>Experience</h2>
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

export default ExperienceForm;
