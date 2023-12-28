import React, { useState } from "react";
import "../styles/personal-detail.css";

const PersonalForm = ({}) => {
  return (
    <div className="form">
      <h2>Personal Details</h2>
      <form className="flex-container">
        <label htmlFor="full-name">Full name</label>
        <input name="full-name" type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" type="text" />
        <label htmlFor="phone-number">Phone number</label>
        <input name="phone-number" type="text" />
        <label htmlFor="address">Address</label>
        <input name="address" type="text" />
      </form>
    </div>
  );
};

export default PersonalForm;
