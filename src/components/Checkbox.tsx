import React, { useState } from "react";
import { lightenHSL } from "../helpers/functions";
import * as styles from "../styles/Checkbox.module.css";

type Selections = Array<boolean>;

interface Props {
  isChecked: boolean;
  index: number;
  setParentState: React.Dispatch<React.SetStateAction<Selections>>;
  parentState: Selections;
}

export function Checkbox({
  isChecked,
  index,
  setParentState,
  parentState,
}: Props): JSX.Element {
  const [checked, setChecked] = useState(isChecked);
  const listOfStates = [...parentState];
  const length = parentState.length;
  const count = parentState[length - 1] ? length + 1 : length;
  const onChange = (): void => {
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
        id={index + ""}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      ></input>
    </label>
  );
}
