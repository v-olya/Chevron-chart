import { useState } from 'react';

export function Checkbox({isChecked, index, setParentState, parentState}) {
  const [checked, setChecked] = useState(isChecked);
  const listOfStates = [...parentState];
  const length = parentState.length;
  const count = (parentState[length - 1]) ? length + 1 : length;
  const onChange = e => {
  	listOfStates[index] = !checked;
  	if (!listOfStates.find(x=> x)) {
  		listOfStates[index] = checked;
  		alert("At least one box must be selected. To uncheck it, please select some other box and then uncheck this option.")
  	}
  	if ( count == length + 1 && listOfStates[length-1] ==false) {listOfStates[length]=false}
  	setParentState(listOfStates);
  	setChecked(listOfStates[index]);
  }
  return (
    <label className="paired">
      <span
        className="colorBox"
        style={{ background: `rgba(4, 42, 2, ${1 - (index / count)})` }}
      ></span>
      <input id={index} type="checkbox" checked={isChecked} onChange={onChange}></input>
    </label>
  );
}
