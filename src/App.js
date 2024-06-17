import { useState } from "react";
import { CheckboxList } from "./components/CheckboxList.js";
import { Chart } from "./components/Chart.js";

export function App() {
  const [selections, setSelections] = useState([true]);

  return (
    <main className="container">
      <h1 className="txt-c">
        A bunch of checkboxes with at least one selected
      </h1>
      <CheckboxList selections={selections} setSelections={setSelections} />
      <Chart selections={selections} />
    </main>
  );
}
