import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search-slice";

import Select from "react-select";

import classes from "./Inputs.module.css";

const Inputs = ({ theme }) => {
  const dispatch = useDispatch();

  const inputSearchHandler = (evt) => {
    if (evt.target.value.trim().length !== 0) {
      dispatch(searchActions.searchHandler(evt.target.value));
    } else {
      dispatch(searchActions.searchHandler(""));
    }
  };

  const selectFilterHandler = (evt) => {
    if (evt) {
      dispatch(searchActions.selectHandler(evt.value));
    } else if (!evt) {
      dispatch(searchActions.selectHandler(""));
    }
  };

  // --------------------------------
  // -----------REACT_SELECT---------
  // --------------------------------
  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      color: "var(--text)",
      background: "var(--bg)",
    }),

    indicatorSeparator: (styles) => ({
      ...styles,
      background: "var(--input)",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "var(--text)",
    }),
    input: (styles) => ({
      ...styles,
      color: "var(--text)",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--input)",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "var(--input)",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: "0 8px 0 8px",
    }),
    control: (styles) => ({
      ...styles,
      background: "var(--accent)",
      border: "none",
      borderRadius: "30%",
      boxShadow: "0 0 10px 0 rgb(0 0 0 / 15%)",
      borderRadius: "30px",
      padding: "5px 0 5px 10px",
      transition: "all 0.4s",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? "hsla(291, 64%, 42%, 0.3)"
        : isSelected
        ? "hsla(291, 64%, 42%, 0.5)"
        : undefined,
    }),
  };

  const options = [
    { value: "Africa", label: "Africa", style: { color: "red" } },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];
  // --------------------------------
  // -----------REACT_SELECT---------
  // --------------------------------

  return (
    <form className={classes.container}>
      <div className={classes.search}>
        <input
          onChange={inputSearchHandler}
          type="search"
          name="search"
          aria-label="search box"
          placeholder="Search for a country..."
        />
      </div>
      <div className={classes.region}>
        <Select
          classNamePrefix="filter"
          id="long-value-select"
          instanceId="long-value-select"
          placeholder="Filter by Region"
          styles={colourStyles}
          options={options}
          isClearable
          onChange={selectFilterHandler}
        />
      </div>
    </form>
  );
};

export default Inputs;
