import "../styles/basic-dropdown.css";
import React from "react";

const BasicDropdown = ({ showDropdown, setShowDropdown, items }) => {
  return (
    <>
      <div className="dropdown-button">
        <button onClick={setShowDropdown} className="trigger-button">
          <span className="material-symbols-outlined">
            {showDropdown ? "expand_more" : "chevron_right"}
          </span>
        </button>
      </div>
      <div className="dropdown">
        <ul className={showDropdown ? "active" : ""}>
          {items.map((item) => (
            <li>{item.school + " " + item.companyName}</li>
          )
          )}
        </ul>
      </div>
    </>
  );
};

export default BasicDropdown;
