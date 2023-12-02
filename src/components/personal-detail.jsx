import React, { useState } from "react";
import "../styles/personal-detail.css";

const PersonalForm = ({}) => {
  return (
    <div className="personal-detail">
      <h4>Personal Details</h4>
      <form className="flex-container">
        <label htmlFor="full-name">Full name</label>
        <input name="full-name" />
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="phone-number">Phone number</label>
        <input name="phone-number" />
        <label htmlFor="address">Address</label>
        <input name="address" />
      </form>
    </div>
  );
};

export default PersonalForm;
