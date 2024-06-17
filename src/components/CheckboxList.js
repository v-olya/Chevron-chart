import PropTypes from "prop-types";
import { Checkbox } from "./Checkbox.js";

CheckboxList.propTypes = {
  selections: PropTypes.arrayOf(PropTypes.bool),
  setSelections: PropTypes.func,
  // selections = [true, false..., false, ?true]. If ends with "true", we must add "false" to the end
};

export function CheckboxList({ selections, setSelections }) {
  const length = selections.length;
  const selectionsClone = selections[length - 1]
    ? [...selections, false]
    : [...selections];

  const list = selectionsClone.map((item, index) => (
    <Checkbox
      key={index}
      index={index}
      isChecked={item}
      setParentState={setSelections}
      parentState={selections}
    />
  ));

  return <div className="checkboxList txt-c">{list}</div>;
}
