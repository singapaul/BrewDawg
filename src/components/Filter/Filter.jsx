import React from "react";
import Checkbox from "../../Containers/Checkbox/Checkbox";
import Dropdown from "../../Containers/Dropdown/Dropdown";
import SearchBox from "../SearchBox/SearchBox";
import "./Filter.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// This is just a middle child
const Filter = ({
  searchTerm,
  handleInput,
  searchlabel,
  checked,
  handleChange,

  // dropdown search props
  labelDropdown,
  options,
  value,
  handleSearchChange,

  // sort props
  labelSort,
  sortOptions,
  sortValue,
  handleSortChange,

  // multi props

  sx,
  getAriaLabel,
  handleSlideChange,
  valueMulti,
  valueLabelDisplay,
  min,
  max,

}) => {
  const checkboxArr = checked.map((box) => {
    return (
      <Checkbox
        key={box.id}
        handleChange={handleChange}
        checked={box.checked}
        label={box.Desc}
        id={box.id}
      />
    );
  });

  return (
    <div className="filter">
      <h2>Filter Box</h2>
      <h3>Search Box</h3>
      <SearchBox
        searchTerm={searchTerm}
        handleInput={handleInput}
        label={searchlabel}
      />
      <Dropdown
        label={labelDropdown}
        options={options}
        value={value}
        onChange={handleSearchChange}
      />
      <h3>Mandatory checkboxes</h3>
      <div>{checkboxArr}</div>
      {/* DropDown for sort */}
      <Dropdown
        label={labelSort}
        options={sortOptions}
        value={sortValue}
        onChange={handleSortChange}
      />
      <h5>multi slide </h5>
      <Box sx={sx}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={valueMulti}
          onChange={handleSlideChange}
          valueLabelDisplay={valueLabelDisplay}
          min={min}
          max={max}
         
        />
      </Box>
    </div>
  );
};

export default Filter;
