import React from "react";
import { Checkbox } from "./Checkbox";

type Selections = Array<boolean>;

interface Props {
  selections: Selections;
  setSelections: React.Dispatch<React.SetStateAction<Selections>>;
}

interface CheckboxProps {
  index: number;
  isChecked: boolean;
  parentState: Props["selections"];
  setParentState: Props["setSelections"];
}

export function CheckboxList({
  selections,
  setSelections,
}: Props): JSX.Element {
  const length = selections.length;
  const selectionsClone = selections[length - 1]
    ? [...selections, false]
    : [...selections];

  const list = selectionsClone.map(
    (item: boolean, index: number): React.ReactElement<CheckboxProps> => (
      <Checkbox
        key={index}
        index={index}
        isChecked={item}
        setParentState={setSelections}
        parentState={selections}
      />
    ),
  );

  return <div className="checkboxList txt-c">{list}</div>;
}
