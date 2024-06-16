import { useState } from 'react';
import { Checkbox } from './components/Checkbox.js';
import { Chart } from './components/Chart.js';

export function App() {

  const [selections, setSelections] = useState([true]);
  const length = selections.length;
  const selectionsClone = [...selections];

  if (selections[length - 1]) {
    selectionsClone.push(false);
  }
  const list = selectionsClone.map((item, index) => 
    <Checkbox key={index} index={index} isChecked={item} setParentState={setSelections} parentState={selections}/>
  );
  return (
    <main className="container">
      <h1>A bunch of checkboxes with at least one selected</h1>
      <div className="checkboxList">{list}</div>
      <Chart selections={selections}/>
    </main>
  );
}
