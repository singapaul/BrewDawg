import React from "react";

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <>

      <label>
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.label} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Dropdown;
