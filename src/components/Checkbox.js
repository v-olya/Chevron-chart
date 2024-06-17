import { useState } from "react";
import PropTypes from "prop-types";
import { lightenHSL } from "../helpers/functions.js";
import styles from "../styles/Checkbox.module.css";

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  index: PropTypes.number,
  setParentState: PropTypes.func,
  parentState: PropTypes.arrayOf(PropTypes.bool),
};

export function Checkbox({ isChecked, index, setParentState, parentState }) {
  const [checked, setChecked] = useState(isChecked);
  const listOfStates = [...parentState];
  const length = parentState.length;
  const count = parentState[length - 1] ? length + 1 : length;
  const onChange = () => {
    listOfStates[index] = !checked;
    if (!listOfStates.find((x) => x)) {
      listOfStates[index] = checked;
      alert(
        "At least one box must be selected. To uncheck it, please select some other box and then uncheck this option.",
      );
    }
    setChecked(listOfStates[index]);
    setParentState(listOfStates);
  };
  return (
    <label className={styles.paired}>
      {" "}
      {index + 1}.&nbsp;
      <span
        className={styles.colorBox}
        style={{ background: lightenHSL(index, count) }}
      ></span>
      <input
        id={index}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      ></input>
    </label>
  );
}
